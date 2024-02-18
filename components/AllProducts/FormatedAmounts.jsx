import React from "react";

const FormatedAmounts = ({ amount }) => {

  const FormatAmount = new Number(amount).toLocaleString("en-us", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  });


//   console.log("my fromate accuobd is " , FormatAmount);


  return(
    <span>{FormatAmount}</span>
  );
};

export default FormatedAmounts;




