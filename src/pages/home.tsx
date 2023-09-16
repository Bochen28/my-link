import CategoryBox from "@/components/categoryBox/CategoryBox";
import Navbar from "@/components/navbar/Navbar";
import "@/app/globals.sass";

function Home() {
  return (
    <>
      <Navbar />
      <CategoryBox />
    </>
  );
}

export default Home;