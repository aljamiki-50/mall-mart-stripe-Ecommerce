"use client";
import { GetPoducts, GetSingleProduct } from "@/Helpers/GetAllProudcts";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  userInfo: null,
  orderData: [],
};

export const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.productData.find((item) => {
        // Check if the item's ID matches the payload's ID
        return item._id === action.payload._id;
      });

      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    // Increeasing Qty
    incQty: (state, action) => {
      const existingProduct = state.productData.find((item) => {
        // Check if the item's ID matches the payload's ID
        return item._id === action.payload._id;
      });

      if (existingProduct) {
        existingProduct.quantity++;
      }
    },
    decQty: (state, action) => {
      const existingProduct = state.productData.find((item) => {
        // Check if the item's ID matches the payload's ID
        return item._id === action.payload._id;
      });

      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity--;
      }
    },

    DelProduct: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item._id !== action.payload._id
      );
    },

    resetProduct: (state) => {
      state.productData = [];
    },
    AddUser: (state, action) => {
      state.userInfo = action.payload;
    },
    delUser: (state, action) => {
      state.userInfo = null;
    },
    saveOrder: (state, action) => {
      state.orderData = action.payload;
    },
    resetOrder: (state) => {
      state.orderData = [];
    },
  },
});

export const {
  addToCart,
  incQty,
  decQty,
  resetProduct,
  DelProduct,
  AddUser,
  delUser,
  saveOrder,
  resetOrder,
} = shoppingSlice.actions;
export default shoppingSlice.reducer;
