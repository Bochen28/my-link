import { useEffect } from "react";
import { color } from "@/data/local";
import dynamic from "next/dynamic";
import Navbar from "@/components/navbar/Navbar";
import "@/app/globals.sass";

const CategoryBox = dynamic(
  () => import("@/components/categoryBox/CategoryBox"),
  { ssr: false }
);

function Home() {
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-color", color);
  }, []);

  return (
    <>
      <Navbar />
      <CategoryBox />
    </>
  );
}

export default Home;
