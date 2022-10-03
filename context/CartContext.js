import { createContext, useState } from "react";

export const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addCart = (item) => {
    let foundedItem = cart.find((x) => x.id == item.id);

    if (foundedItem) {
      // sepette aynı id ye sahip itemler var.
      //item.amount = item.amount +1 
      foundedItem.amount= foundedItem.amount +1;
      console.log("foundedItem ",foundedItem)
      foundedItem.totalPrice = item.price * item.amount
      setCart([...cart.filter((x) => x.id != foundedItem.id), foundedItem]);
    } 
    else {
      // sepette aynı id ye sahip item yok. 
      item.totalPrice = item.price
      console.log("else=>>")
     item.amount = 1
     setCart([...cart, item]);

    }
  };

  const removeCart = (item) => {
    // Önce sepette aynı id ye sahip item var mı onu bulduk. Eğer varsa miktarını bir düşür dedik.
    // Sonrasında cart'ın içinde filter yaptık ve dedik ki seçilen itemin id si ile removeFounded'un id si eşit değilse 1 azaltarak git.
      let removeFounded = cart.find((x) => x.id == item.id );
     if(!removeFounded) return null
   
        if(removeFounded.amount < 2)
        {
          // Bir tane ürün var ise bu bloğa gireceğiz.
          setCart([...cart.filter((x) => x.id !== removeFounded.id)])
        }else{
          removeFounded.amount = removeFounded.amount -1;
          console.log("removeFounded", removeFounded)
          removeFounded.totalPrice = item.price * item.amount
          setCart([...cart.filter((x) => x.id !== removeFounded.id), removeFounded])
        }
    
  };
  // 


  return (
    <CartContext.Provider value={{ cart, addCart, removeCart }}>
      {children}
    </CartContext.Provider>
  );
};
