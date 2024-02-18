"use client";

import { makeStore, persistor, store } from "@/ReduxStore/Store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// import { useRef } from 'react'
// import { Provider } from 'react-redux'
// import { makeStore } from '../lib/store'

const Session = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate  persistor={persistor}>
       
        <SessionProvider>{children}</SessionProvider>
      </PersistGate>
    </Provider>
  );
};

export default Session;
