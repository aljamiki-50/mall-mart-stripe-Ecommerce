import Container from "@/components/Container";
import Link from "next/link";
import React from "react";

const Sucess = () => {
  return (
    <Container classname={"flex items-center justify-center py-20"}>
      <div className=" min-[400px] flex flex-col items-center justify-center gap-y-5">
        <h2 className=" text-center text-4xl font-bold font-serif">
          Your Payment Accepeted By ShoppingMart.com
        </h2>
        <p>Now you can view your Ordersor Continue shopping with us </p>
        <div className=" flex items-center gap-x-5 t">
          <Link href={"/order"}>
            <button className="  bg-black text w-44 h-12 rounded-full text-base text-white font-semibold hover:bg-orange-700 duration-300">
              View Orders
            </button>
          </Link>
          <Link href={"/"}>
            <button className=" text-white  bg-black text w-44 h-12 rounded-full text-base font-semibold hover:bg-orange-700 duration-300">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Sucess;
