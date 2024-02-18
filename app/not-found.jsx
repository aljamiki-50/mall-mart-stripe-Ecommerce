import Container from "@/components/Container";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <Container className=" flex items-center py-20  justify-center    bg-indigo-500 ">
      <div className=" max-w-full flex flex-col items-center justify-center  gap-y-5 min-h-[500px]">
        <h2 className="  font-bold text-4xl">page not found </h2>
        <p className=" text-base font-medium text-center">
          opps That page you have been looking for it may been delted or removed{" "}
        </p>
        <Link
          href={"/"}
          className=" bg-black text-slate-100  w-44 h-12 mx-auto flex justify-center items-center font-semibold  rounded-lg p-2 ring-2   ring-indigo-300 hover:bg-orange-600/45 hover:text-white duration-200"
        >
          Home
        </Link>
      </div>
    </Container>
  );
};

export default NotFound;
