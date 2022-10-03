
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import styles from "../styles/card.module.css";


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {

  const {cart, removeCart,basketData} = useContext(CartContext)

  const deleteshowToastMessage = () => {
    toast.error("Product removed from cart!", {
      position: toast.POSITION.TOP_LEFT,
      autoClose: 400,
      
    });
  };


  return (
    <>
      <div className={styles.container}>
        <div className={styles.productWrapper}>
          <div className={styles.products}>
            {cart.sort((a,b) => a.totalPrice - b.totalPrice ).map((item) => (
              <div className={styles.items} key={item.id}>
                <img className={styles.itemImg} src={item.img} />
                <div className={styles.itemsDetail}>
                  <div className={styles.itemTitle}>
                    <strong>Product Type :</strong>
                    {item.title}
                  </div>
                  <div className={styles.itemPrice}>
                    <strong>Product Price : </strong>${item.price} <br/> 
                    <div className={styles.amount}><strong>Amount: </strong>{item.amount}</div>
                  </div>
                </div>
                <div className={styles.totalPrice}><strong>Total Price: </strong> ${item.totalPrice}</div>
                <>
                  <button
                    onClick={() => {
                      removeCart(item);
                      deleteshowToastMessage();
                    }}
                    className={styles.btnAdd}
                  >
                    Remove to Basket
                  </button>{" "}
                  <ToastContainer />
                </>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
