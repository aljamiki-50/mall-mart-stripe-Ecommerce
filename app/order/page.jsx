"use client";

import Container from "@/components/Container";
import OrderDetails from "@/components/OrderDetails/OrderDetails";
import { useSelector } from "react-redux";

const page = () => {
  return (
    <div>
      <Container>
        <OrderDetails />
      </Container>
    </div>
  );
};

export default page;
