import { DATA } from "@/constants/data";

export const GetPoducts = async () => {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/smart");

  if (!res.ok) {
    throw new Error("Failed  Fetching products inside the helper func");
  } else {
    return res.json();
  }
};

// Creating a parse price here

export const CalPricePersentage = (oldPrice, Price) => {
  return !!parseFloat(Price) && !!parseFloat(oldPrice)
    ? (100 - (oldPrice / Price) * 100).toFixed(0)
    : 0;
};


// Get a single Product for one item

export const GetSingleProduct = async (_id) => {

  // console.log(_id);

  const products = await GetPoducts()

    const oneProduct = products.find((productType)=>productType?._id === _id)
    // console.log("where",oneProduct);
    return oneProduct
  
}


// get Trending Products 
export const GetTrendingPoducts = async () => {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/smarttrending");

  if (!res.ok) {
    throw new Error("Failed  Fetching products inside the helper func");
  } else {
    return res.json();
  }
};


