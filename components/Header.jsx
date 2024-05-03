"use client";
import Container from "./Container";
import Logo from "./Logo";
import { CiShoppingCart } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import FormatedAmounts from "./AllProducts/FormatedAmounts";
import Link from "next/link";
import { AddUser, delUser } from "@/ReduxStore/ShoppingSlice";
import { BsBookmark } from "react-icons/bs";

const Header = () => {
  const { data: session, status, ClientSafeProvider } = useSession();
  const {productData,orderData } = useSelector((state) => state.shopping);
  const dispatch = useDispatch();
  // console.log(orderData);


  // console.log(Userinfo);

  // Here we add again another user to our slice

  useEffect(() => {
    if (session) {
      dispatch(
        AddUser({
          name: session?.user?.name,
          email: session?.user?.email,
          image: session?.user?.image,
        })
      );
    } else {
      dispatch(delUser());
    }
  }, [session, dispatch]);

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

  // console.log(productData);

  return (
    <div className="  bg-bodyColor h-20">
      {/* we create a contain to hold up our containg files  */}
      <Container
        classname={
          " h-full flex items-center md:gap-x-3 justify-between md:justify-start"
        }
      >
        <Logo />
        {/* Search field  */}
        <div className="w-full group: bg-white hidden md:flex items-center gap-x-1 border-[1px] border-lightText/50 rounded-full px-4 py-1.5 focus-within:border-orange-600 group">
          <FaSearch className="  group-focus-within:text-darkText duration-200 text-gray-500" />
          <input
            type="text"
            placeholder="Search for the product"
            className=" placeholder:text-sm flex-1 outline-none active:ring-1"
          />
        </div>
        {/* Login and register  */}
        {!session && (
          <div
            onClick={() => {
              signIn();
            }}
            className="headerDiv  cursor-pointer"
          >
            <AiOutlineUser className="text-2xl" />
            <p className=" text-sm font-semibold  ">Login/Register</p>
          </div>
        )}

        {/* Cart Button  */}
        <Link href={"/cart"}>
          <div
            className="
         bg-black   text-slate-100 hover:text-white justify-center rounded-full hover:bg-slate-950h flex items-center gap-x-1 py-1.5 px-3
          border-black hover:border-orange-600 duration-200 border-[1px] relative
         "
          >
            <CiShoppingCart className="text-xl" />
            <p className=" text-sm font-semibold  ">
              <FormatedAmounts amount={totalAmount || 0} />
            </p>
            <span className="CartDiv">
              {productData ? productData?.length : "0"}
            </span>
          </div>
        </Link>

        {/* user image  */}
        {session && (
          <Image
            priority
            className=" rounded-full object-cover"
            width={60}
            height={60}
            src={session?.user?.image}
            alt="my profile image"
          />
        )}
        {/* Order Button */}
        {
          orderData && session&&(
            <Link  className=" fill-indigo-400  ring-1 ring-indigo-500 headerDiv px-2 gap-x-1  cursor-pointer" href={"/order"}>
              <BsBookmark className=" text-2xl" />
              <p className=" text-sm font-semibold">Orders</p>
            </Link>
          )
        }
        {/* Logout section */}
        {session && (
          <div
            onClick={() => {
              signOut();
            }}
            className="headerDiv "
          >
            <FiLogOut className="text-2xl" />
            <p className="text-sm font-semibold">Logout</p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Header;
