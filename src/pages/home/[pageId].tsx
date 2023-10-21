import dynamic from "next/dynamic";
import Navbar from "@/components/navbar/Navbar";
import "@/app/globals.sass";

const LinkBox = dynamic(() => import('@/components/linkBox/LinkBox'), {ssr: false})

function LinkPage() {
  return (
    <>
      <Navbar />
      <LinkBox />
    </>
  );
}

export default LinkPage;
