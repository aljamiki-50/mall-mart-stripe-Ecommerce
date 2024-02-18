import React from "react";
import payment from "@/images/payment.png";
import Image from "next/image";
import Container from "../Container";
import Logo from "../Logo";
import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsReddit,
  BsYoutube,
} from "react-icons/bs";
import Link from "next/link";

const Footers = () => {
  return (
    <div className="   w-full bg-darkText text-slate-100">
      <Container
        classname={"grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-10"}
      >
        <div className=" flex flex-col   gap-y-4">
          <Logo />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            quibusdam ex animi totam harum facilis minus, soluta autem iste
            numquam dolorum tempore architecto cumque ad modi. Culpa quis
            doloribus maxime porro veritatis dolorum adipisci in expedita, cum
            consequatur illo quod.
          </p>
          <div className=" flex items-center gap-x-4">
            <span className="socialSpan">
              <BsYoutube />
            </span>
            <span className="socialSpan">
              <BsGithub />
            </span>
            <span className="socialSpan">
              <BsLinkedin />
            </span>
            <span className="socialSpan">
              <BsFacebook />
            </span>
            <span className="socialSpan">
              <BsReddit />
            </span>
          </div>
        </div>
        {/* 2nd coulmn  Posts footer */}
        <div className="">
          <p className=" text-lg">Latest Posts</p>
          <ul className=" text-sm mt-2 flex flex-col gap-y-2 font-bold">
            <li className=" flex flex-col">
              <span className=" text-slate-100 hover:text-orange-400 cursor-pointer duration-200">
                Wher the Music is Headed
              </span>
              <span className=" cursor-pointer hover:text-orange-600">
                Jan 31-12-22
              </span>
            </li>
            <li className=" flex flex-col">
              <span className=" text-slate-100 hover:text-orange-400 cursor-pointer duration-200">
                Wher the Music is Headed
              </span>
              <span className=" cursor-pointer hover:text-orange-600">
                Jan 31-12-22
              </span>
            </li>
            <li className=" flex flex-col">
              <span className=" text-slate-100 hover:text-orange-400 cursor-pointer duration-200">
                Wher the Music is Headed
              </span>
              <span className=" cursor-pointer hover:text-orange-600">
                Jan 31-12-22
              </span>
            </li>
            <li className=" flex flex-col">
              <span className=" text-slate-100 hover:text-orange-400 cursor-pointer duration-200">
                Wher the Music is Headed
              </span>
              <span className=" cursor-pointer hover:text-orange-600">
                Jan 31-12-22
              </span>
            </li>
          </ul>
        </div>
        {/* 3rd coulmn which The Links */}
        <div className="">
          <p className=" text-lg"> Links</p>
          <ul className=" font-medium mt-2 flex flex-col gap-y-2 text-base">
            <Link href={"/"}>
              {" "}
              <li className=" hover:text-orange-500 cursor-pointer duration-200">
                Home
              </li>
            </Link>
            <Link href={"/Cart"}>
              <li className=" hover:text-orange-500 cursor-pointer duration-200">
                CART
              </li>
            </Link>

            <Link href={"/About"}>
              <li className=" hover:text-orange-500 cursor-pointer duration-200">
                ABOUT
              </li>
            </Link>
            <Link href={"/News"}>
              <li className=" hover:text-orange-500 cursor-pointer duration-200">
                NEWS LETTER
              </li>
            </Link>

            <Link href={"/Contact"}>
              <li className=" hover:text-orange-500 cursor-pointer duration-200">
                CONTACT
              </li>
            </Link>
          </ul>
        </div>
        {/* 4th coulmn which is paymern */}
        <div className="">
            <p className=" font-semibold text-lg mb-2">Pay Us With trusted Services </p>
      <Image src={payment} className=" w-full h-10" objectFit="cover"  alt=" hey how you d" />
      </div>
      </Container>
    </div>
  );
};

export default Footers;
