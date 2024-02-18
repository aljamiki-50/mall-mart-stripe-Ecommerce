import React from "react";
import { DATA } from "@/constants/data";
import { NextResponse } from "next/server";

// console.log(DATA);

export const GET = async () => {
  try {

    return NextResponse.json({
        message:"Product Fetched Succefully",
        success:true,
        DATA,
        
    })
    // console.log("hey  you good");
    // console.log(DATA);
  } catch (error) {
    return NextResponse.json(
      {
        error: "product loading Error",
      },
      {
        status: 500,
      }
    );
  }
};

// const route = () => {
//   return <div></div>;
// };

// export default route;
