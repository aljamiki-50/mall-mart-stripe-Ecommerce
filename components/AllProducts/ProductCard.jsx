"use client";

import { CalPricePersentage } from "@/Helpers/GetAllProudcts";
import Image from "next/image";
import React from "react";
import FormatedAmounts from "./FormatedAmounts";
import { IoIosStar } from "react-icons/io";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/ReduxStore/ShoppingSlice";
import toast, { Toaster } from "react-hot-toast";

const ProductCard = ({ items }) => {
  const dispatch = useDispatch();
  const startArray = Array.from({ length: items?.rating }, (_, index) => (
    <span key={index} className=" text-yellow-500">
      <IoIosStar />
    </span>
  ));
  //   console.log(items.rating);
  return (
    <div className=" bg-red-600   w-full rounded-lg overflow-hidden">
      <Link
        href={{ pathname: "/product", query: { _id: items?._id } }}
        // href={`/product/${items?._id}`}
      >
        <div className="">
          <div className=" relative  w-full h-96 group overflow-hidden">
            <Image
              src={items?.image}
              width={500}
              height={500}
              alt=" picture for"

              className=" w-full h-full object-cover group-hover:scale-110  rounded-t-lg group-hover:duration-500 group-hover:ease-in-out "
            />
            {items?.isNew && (
              <span className=" absolute top-2 right-2 font-medium   text-xs px-3 py-1 bg-white duration-200  group-hover:text-white   group-hover:bg-orange-600 rounded-full ">
                New Arrival
              </span>
            )}
          </div>
          <div className="  border-[1px] border-slate-300  border-t-0      px-2 py-4 flex  flex-col gap-y-2 bg-white b rounded-b-lg">
            <p> {items?.title}</p>
            {/* Price div */}
            <div className=" flex items-center justify-between">
              <div className=" border-[1px] py-1 px-4 rounded-full text-sm border-orange-700">
                <p>{CalPricePersentage(items?.price, items?.oldPrice)}% Off</p>
              </div>
              <div className=" flex items-center gap-x-2">
                <p className=" line-through  text-slate-400">
                  {/* {items?.oldPrice} */}
                  <FormatedAmounts amount={items?.oldPrice} />
                </p>
                <p className="  font-semibold ">
                  {/* {items?.oldPrice} */}
                  <FormatedAmounts amount={items?.price} />
                </p>
              </div>
            </div>
            {/* add to cart  div */}
            <div className=" flex items-center justify-between">
              <button
                onClick={() => {
                  // Dispatch the addToCart action with items as payload
                  dispatch(addToCart(items)); 
                  toast.success(
                    `${items?.title.substring(0, 15)} added successfully `
                  );

                  // console.log(addToCart(items));
                }}
                className=" bg-orange-600 px-4 py-2 text-sm tracking-wide rounded-full text-slate-100   hover:bg-orange-800 hover:text-white duration-200"
              >
                add to cart
              </button>
              {/* Start icon */}
              <div className=" flex items-center gap-x-1">{startArray}</div>
            </div>{" "}
          </div>
        </div>
      </Link>
      <Toaster />
    </div>
  );
};

export default ProductCard;
