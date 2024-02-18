"use client";

import { decQty, incQty,DelProduct } from "@/ReduxStore/ShoppingSlice";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import FormatedAmounts from "../AllProducts/FormatedAmounts";

const CartItems = () => {
  const CartProducts = useSelector((state) => state?.shopping?.productData);
  const dispatch = useDispatch();

  return (
    <div className=" flex flex-col gap-y-2">
      <div className=" hidden lg:inline-flex items-center justify-center font-semibold bg-white p-2 ">
        <p className=" w-1/3">Product</p>
        <p className=" w-1/3 flex items-center justify-center ">Quantity</p>
        <p className=" w-1/3 flex items-center justify-end ">subtotal</p>
      </div>
      {/* Gen the product her e */}
      <div className=" flex flex-col gap-y-2">
        {CartProducts?.map((item) => (
          <div
            className=" w-full  bg-white p-4 flex flex-col md:flex-row items-center justify-between gap-4"
            key={item?._id}
          >
            {/* image param goes here  */}
            <div className=" flex items-center gap-x-3 w-full md:w-1/3">
              <span
                onClick={() => {
                  
                  dispatch(DelProduct(item))
                }
                }
               className=" text-lg hover:text-red-600 duration-200  cursor-pointer">
                <AiOutlineClose />
              </span>
              <Image
                src={item?.image}
                className=" w-20 h-20 object-cover"
                height={500}
                width={500}
                alt=" product image "
                loading="lazy"
              />
            </div>
            {/* Quantity  */}
            <div className=" flex items-center justify-start gap-x-3 border-[1px] border-slate-300 px-4 py-2 w-full md:w-auto">
              <p>Quantity</p>
              <div className=" flex  items-center text-lg  w-20 justify-between">
                <span
                 onClick={() => {

                  dispatch(decQty(item))
                   
                 }
                 }
                 className=" cursor-pointer">
                  <FiChevronLeft />
                </span>
                <span className="">{item?.quantity}</span>
                <span
                onClick={() => {
                  dispatch(incQty(item))
                  
                }
                }
                 className=" cursor-pointer">
                  <FiChevronRight />
                </span>
              </div>
            </div>
            {/* Price */}
            <div className=" w-full md:w-1/3 flex  items-end j justify-start md:justify-end">
              <p className=" text-lg font-semibold"><span>{item?.quantity} * {item?.price} = </span><FormatedAmounts amount={item?.price * item?.quantity } /></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItems;
