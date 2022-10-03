import React from "react";
import { CartContextProvider } from "../context/CartContext";
import Navbar from "./Navbar";


const Layout = ({ children }) => {
  return (
   
    <div>
      <CartContextProvider> 
      <Navbar />
      {children}
      </CartContextProvider>
    </div>
  
  );
};

export default Layout;
