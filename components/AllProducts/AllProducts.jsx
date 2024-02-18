



import { GetPoducts } from "@/Helpers/GetAllProudcts";
import Container from "../Container";
import ProductCard from "./ProductCard";
// import { useDispatch } from "react-redux";






const AllProducts = async () => {
  const products = await GetPoducts()
  return (

    <Container
     classname={" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 -mt-10 "}>
      {products?.map((items)=>(

          <ProductCard items={items} key={items._id} /> 
       
       
      ))}
     
    </Container>

  );
   
}

export default AllProducts
