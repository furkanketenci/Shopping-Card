import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import styles from "../styles/Main.module.css";
import product from "./product.json";
import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  const { addCart } = useContext(CartContext);

  const showToastMessage = () => {
    toast.success("Product added to cart!", {
      position: toast.POSITION.TOP_LEFT,
      autoClose: 400,
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.brandTitle}>Our products..</div>

      <div className={styles.container}>
        <div className={styles.productWrapper}>
          <div className={styles.products}>
            {product.map((item) => (
              <div className={styles.items} key={item.id}>
                <img className={styles.itemImg} src={item.img} />
                <div className={styles.itemsDetail}>
                  <div className={styles.itemTitle}>
                    <strong>Product Type : </strong>
                    {item.title}
                  </div>
                  <div className={styles.itemPrice}>
                    <strong>Product Price : </strong>${item.price}
                  </div>
                </div>
                <button
                  onClick={() => {
                    addCart(item);
                    showToastMessage();
                  }}
                  className={styles.btnAdd}
                >
                  {" "}
                  Add to Basket{" "}
                </button>
                <ToastContainer />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
