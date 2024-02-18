"use client";

import { resetProduct } from "@/ReduxStore/ShoppingSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const RestButton = ({ item }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleReset = () => {
    dispatch(resetProduct());
   setTimeout(() => {
    
    toast.success(
        `Mate 😒 you just Del Everything out of this Cart you Gonna be Redirect Cause There s nothing to Purchase  🥶
        `
      );
   }, 5000);

    setTimeout(() => {
      router.push("/");
    }, 10000);
  };
  return (
    <div>
      <button
        type="button"
        onClick={handleReset}
        className=" bg-red-500 font-semibold text-slate-100 hover:bg-red-700 hover:text-white  duration-200 py-2 px-6"
      >
        Reset Button
      </button>
      <Toaster />
    </div>
  );
};

export default RestButton;
