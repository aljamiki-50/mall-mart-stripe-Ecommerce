import { GetPoducts } from "@/Helpers/GetAllProudcts";
import AllProducts from "@/components/AllProducts/AllProducts";
import Banner from "@/components/Banner/Banner";
import Header from "@/components/Header";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default  function Home() {
  
  return (
    <main className="  ">
      <Banner />
      <AllProducts />
    </main>
  );
}
