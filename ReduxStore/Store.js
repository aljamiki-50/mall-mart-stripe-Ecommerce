import { configureStore } from "@reduxjs/toolkit";
import shoppingReducer from "@/ReduxStore/ShoppingSlice";
import ShoppingSlice from "@/ReduxStore/ShoppingSlice";
// Them Two func to solve the fallback Erorr
import { WebStorage } from "redux-persist/es/types";
import createWebStorage from "redux-persist/es/storage/createWebStorage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import storage from "redux-persist/lib/storage";

export function createPresistancetore() {
  const isServer = typeof window === "undefined";

  if (isServer) {
    return {
      getItem() {
        return Promise.resolve(null);
      },
      setItem() {
        return Promise.resolve(null);
      },
      removeItem() {
        return Promise.resolve(null);
      },
    };
    return createWebStorage("localq");
  }
}

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createPresistancetore();

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, shoppingReducer);

const initialState = {
  productData: [],
  userInfo: null,
  orderData: [],
};

export const store = configureStore({
  reducer: {
    shopping: persistedReducer,
  },

  // reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // preloadedState: initialState,
});

export let persistor = persistStore(store);
