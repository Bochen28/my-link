import dynamic from "next/dynamic";
import Navbar from "@/components/navbar/Navbar";
import "@/app/globals.sass";

const CategoryBox = dynamic(() => import('@/components/categoryBox/CategoryBox'), {ssr: false})

function Home() {
  return (
    <>
      <Navbar />
      <CategoryBox />
    </>
  );
}

export default Home;