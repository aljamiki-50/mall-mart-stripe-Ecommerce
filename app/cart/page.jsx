"use client";

import CartItems from "@/components/CartItems/CartItems";
import RestButton from "@/components/CartItems/RestButton/RestButton";
import Container from "@/components/Container";
import PaymentForm from "@/components/PaymentForm/PaymentForm";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
  const { productData } = useSelector((state) => state?.shopping);

  // const
  return (
    <Container classname={"overflow-hidden"}>
      {productData?.length > 0 ? (
        <Container>
          <h2>CartItems</h2>
          <div className=" text-2xl font-semibold  mb-2">
            <CartItems />

            <div className=" flex items-center justify-end">
              <RestButton />
            </div>
            {/* Payment Form */}
            <PaymentForm />
          </div>{" "}
        </Container>
      ) : (
        <div className=" p-10 bg-cyan-900  h-72 flex flex-col gap-y-6 items-center justify-center  px-4">
          Oh sorry love it s Empty{" "}
          <button className=" bg-black text-slate-100 mt-4 py-3 px-6 hover:bg-orange-600  ">
            <Link  href={{ pathname:"/" }}>Back To home Page</Link>
          </button>
        </div>
      )}
    </Container>
  );
};

export default page;
