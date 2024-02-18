import {
  GetPoducts,
  GetSingleProduct,
  GetTrendingPoducts,
} from "@/Helpers/GetAllProudcts";
import ProductCard from "@/components/AllProducts/ProductCard";
import Container from "@/components/Container";
import SingleOneProduct from "@/components/SingleProduct/SingleProduct";
import React from "react";

async function SingleProduct({ searchParams }) {
  const id = Number(searchParams?._id);


  const prodduct = await GetSingleProduct(id);

  // console.log(prodduct);

  const TrendingProducts = await GetTrendingPoducts();
  // console.log("you single prodcu is ", TrendingProducts);
  return (
    <div>
      <Container>
        <SingleOneProduct prodduct={prodduct} />
        <div className="">
          <p className=" text-left py-1 px-1 font-semibold">
            Trending Products
          </p>
          <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {TrendingProducts?.map((TrenProduct,id) => {
              // console.log("Product ID:", id); // Log the _id property
              return <ProductCard key={id} items={TrenProduct} />;
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default SingleProduct;
