"use client";
import { CalPricePersentage } from "@/Helpers/GetAllProudcts";
import Image from "next/image";
import React from "react";
import FormatedAmounts from "../AllProducts/FormatedAmounts";
import { IoMdCart } from "react-icons/io";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { addToCart } from "@/ReduxStore/ShoppingSlice";
// import { addToCart } from "@/ReduxStore/ShoppingSlice";
// import toast, { Toaster } from "react-hot-toast";

const SingleOneProduct = ({ prodduct }) => {
  const dispatch = useDispatch();
  const productData = useSelector(state => state.productData);

console.log(productData);

  // console.log("the add to cart",addToCart.match);

  // console.log(addToCart());
  return (
    <div className=" grid lg:grid-cols-2 grid-cols-1 gap-5 bg-red-500 p-4 rounded-lg">
      <div className="">
        <Image
          src={prodduct?.image}
          alt="product image"
          width={500}
          height={500}
          className=" w-full max-h-[700px] object-cover rounded-lg"
        />
      </div>
      <div className=" flex justify-center gap-y-10  flex-col">
        <div className="">
          <p className=" font-semibold text-3xl">{prodduct?.title}</p>
          <p className=" text-xl font-semibold">
            <FormatedAmounts amount={prodduct?.price} />
          </p>
        </div>
        <p className=" text-lightText   font-medium">{prodduct?.description}</p>
        <div className=" flex flex-col text-sm text-lightText">
          <span>
            SKU: <span className=" text-darkText">{prodduct?._id}</span>
          </span>
          <span>
            Category:{" "}
            <span className=" text-darkText">{prodduct?.category}</span>
          </span>
        </div>
        <div className=" flex items-center cursor-pointer group">
          <button
            onClick={() => {
              // Dispatch the addToCart action with items as payload
                dispatch(addToCart(prodduct));
                toast.success(
                `${prodduct?.title.substring(0, 15)} added successfully `
              );
            }}
            className=" cursor-pointer bg-darkText text-slate-100 px-6 py-3 text-sm uppercase flex items-center border-r-[1px] border-r-slate-500"
          >
            Add To Cart
          </button>
          <span className=" bg-darkText text-xl text-slate-100 w-12 flex items-center justify-center group-hover:bg-orange-500 py-3 duration-200">
            <IoMdCart />
          </span>
        </div>
        <p className=" flex items-center text-sm gap-x-2 cursor-pointer ">
          Add to wishList
          <MdOutlineFavoriteBorder className=" text-xl" />
        </p>
      </div>
      <toaster />
    </div>
  );
};

export default SingleOneProduct;
