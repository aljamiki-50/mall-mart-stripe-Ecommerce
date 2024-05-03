"use Client";

import { useDispatch, useSelector } from "react-redux";
import FormatedAmounts from "../AllProducts/FormatedAmounts";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";
import { resetProduct, saveOrder } from "@/ReduxStore/ShoppingSlice";
import Error from "next/error";

const PaymentForm = () => {
  //   const productData = useSelector((state) => state.shopping.productData);
  const { productData,orderData } = useSelector((state) => state?.shopping);
  const dispatch = useDispatch();


  // console.log(dispatch);
  //   Accessing the user data here
  const Userinfo = useSelector((state) => state.shopping.userInfo);

  //Crearting a gross subtottal in our cart

  const [totalAmount, settotalAmount] = useState(0);

  useEffect(() => {
    let amount = 0;

    productData.map((item) => {
      amount += item.price * item.quantity;
      return;
    });

    settotalAmount(amount);
  }, [productData]);

  // Hansle The check out func and stripe
  //  Remmber the stripe publish key has to come with public  to be accessed

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHAPLE_KEY
  );
  const { data: session, status, ClientSafeProvider } = useSession();

  // const {data:session} = useSession()
  const handleTheCheckOut = async () => {
    // Accessing Stripe
    const Stripe = await stripePromise;

    const response = await fetch("http://localhost:3000/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application//json" },
      body: JSON.stringify({
        items: productData,
        email: session?.user?.email,
      }),
    });

    const data = await response.json();
    // console.log(data);
    // console.log("hey how you doin");
    if (response.ok) {
      dispatch(saveOrder({ order: productData, id: data?.id }));
      Stripe?.redirectToCheckout({ sessionId: data.id });
      dispatch(resetProduct());
    } else {
      throw new Error("Failed to create Stripe Payment");
    }
  };
  // Hansle The check out func and stripe

  return (
    <div className=" w-full bg-white p-4">
      <h1>Cart Tottal</h1>
      <div className=" border-b-[1px] border-b-slate-300  py-2 px-2">
        <div className=" max-w-lg flex items-center justify-between">
          <p className=" uppercase   font-medium">SubTotal</p>
          <p>
            <FormatedAmounts amount={totalAmount} />
          </p>
        </div>
      </div>
      {/* Shipping  */}
      <div className=" border-b-[1px] border-b-slate-300  py-2 px-2">
        <div className=" max-w-lg flex items-center justify-between">
          <p className=" uppercase   font-medium">Shipping Value</p>
          <p>
            <FormatedAmounts amount={10} />
          </p>
        </div>
      </div>
      {/* Tottal */}

      <div className=" border-b-[1px] border-b-slate-300  py-2 px-2">
        <div className=" max-w-lg flex items-center justify-between">
          <p className=" uppercase   font-medium">Total Price</p>
          <p className=" text-green-500">
            <FormatedAmounts amount={totalAmount + 10} />
          </p>
        </div>
      </div>
      {/* Payment Form */}
      {Userinfo ? (
        <button
          onClick={handleTheCheckOut}
          className=" bg-black text-slate-100 mt-4 py-3 px-6 hover:bg-orange-600 cursor-pointer duration-200"
        >
          Procced To check out{" "}
        </button>
      ) : (
        <div className="">
          <button className=" bg-black text-slate-100 mt-4 py-3 px-6 hover:bg-orange-600  ">
            Procced To Pay
          </button>
          <p className="  animate-bounce text-base mt-1 text-red-500 font-semibold">
            Please Login/Sign-Up
          </p>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
