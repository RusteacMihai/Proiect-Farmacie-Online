import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [produse, setProduse] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3002/produse`)
      .then((response) => response.json())
      .then((produse) => setProduse(produse))
      .catch((error) =>
        console.error("Eroare la încărcarea produselor:", error)
      );
  }, []);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = produse.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (productId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };

      if (typeof productId === "number") {
        if (updatedCart[productId] !== undefined) {
          updatedCart[productId] += 1;
        } else {
          updatedCart[productId] = 1;
        }
      }

      return updatedCart;
    });
  };
  const removeFromCart = (productId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };

      if (typeof productId === "number") {
        if (updatedCart[productId] !== undefined) {
          updatedCart[productId] -= 1;

          if (updatedCart[productId] === 0) {
            delete updatedCart[productId];
          }
        } else {
          updatedCart[productId] = 1;
        }
      }

      return updatedCart;
    });
  };
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems((prev) => {
      const newCart = {};
      for (const item in prev) {
        newCart[item] = 0;
      }
      return newCart;
    });
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
    produse: produse || [],
  };

  return (
    <ShopContext.Provider value={{ ...contextValue, produse }}>
      {props.children}
    </ShopContext.Provider>
  );
};
