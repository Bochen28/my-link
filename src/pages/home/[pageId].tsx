import { useEffect } from "react";
import { color } from "@/data/local";
import dynamic from "next/dynamic";
import Navbar from "@/components/navbar/Navbar";
import "@/app/globals.sass";

const LinkBox = dynamic(() => import("@/components/linkBox/LinkBox"), {
  ssr: false,
});

function LinkPage() {
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-color", color);
  }, []);

  return (
    <>
      <Navbar />
      <LinkBox />
    </>
  );
}

export default LinkPage;
