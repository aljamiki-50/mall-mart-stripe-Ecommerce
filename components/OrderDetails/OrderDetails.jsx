"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormatedAmounts from "../AllProducts/FormatedAmounts";
import { resetOrder } from "@/ReduxStore/ShoppingSlice";
import Link from "next/link";

const OrderDetails = () => {
  // const { orderData } = useSelector((state) => state?.shopping);
  const { productData, orderData } = useSelector((state) => state?.shopping);
  const dispatch = useDispatch();

  // console.log(orderData.order.length);

  const [totalAmount, settotalAmount] = useState(0);

  useEffect(() => {
    let amount = 0;
    productData.map((item) => {
      amount += item.price * item.quantity;
      return;
    });

    settotalAmount(amount);
  }, [productData]);

  return (
    <div className="">
      {orderData.order?.length > 0 ? (
        <div>
          <div className=" grid grid-cols-7 uppercase text-sm font-medium py-2 border-b-[1px] border-b-gray-300">
            <p className=" col-span-4">Items</p>
            <p className=" flex items-center justify-center"> Quantity</p>
            <p className=" flex items-center justify-center">unit Price</p>
            <p className=" flex items-center justify-center">Amount</p>
          </div>
          <div className=" py-2 flex flex-col justify-center gap-2 bg-white">
            {orderData?.order?.map((item) => (
              <div className=" py-2 border-b-[1px] border-gray-300 grid grid-cols-7 items-center">
                <div className=" flex col-span-4 items-start gap-2 text-sm">
                  <Image
                    src={item?.image}
                    width={500}
                    height={500}
                    className=" w-12 h-12 object-cover"
                    alt="Product"
                  />
                  <div className="">
                    <h3 className=" text-base font-semibold mb-0.5">
                      {item?.title}
                    </h3>
                    <p>{item?.description}</p>
                  </div>
                </div>
                <p className=" flex items-center justify-center">
                  {item?.quantity}
                </p>
                <p className=" flex items-center justify-center">
                  <FormatedAmounts amount={item?.price} />
                </p>
                <p className=" flex items-center justify-center">
                  <FormatedAmounts amount={item?.price * item?.quantity} />
                </p>
              </div>
            ))}
          </div>
          <div className=" text-lg font-medium p-2 border-b-[1px] border-b-gray-300">
            Payment Details
          </div>
          <p className=" py-2">
            Tottal Paid{" "}
            <span className=" text-xl font-semibold">
              <FormatedAmounts amount={totalAmount} />
            </span>
          </p>
          <button
            onClick={() => {
              dispatch(resetOrder());
              // dispatch(resetProduct())
            }}
            className=" mt-5  py-1 px-4 font-medium rounded-md hover:border-orange-600 cursor-pointer duration-200 border-gray-500 border-[1px]"
          >
            Reset Order
          </button>
        </div>
      ) : (
        <div className=" bg-white text-black py-36 text-2xl text-center">
          <p>Nothing To Show</p>
          <Link href={"/"}>
            <button className=" mt-2 text-white  bg-black text w-44 h-12 rounded-full text-base font-semibold hover:bg-orange-700 duration-300">
              Continue Shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
