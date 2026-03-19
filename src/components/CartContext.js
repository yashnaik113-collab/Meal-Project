import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (dish, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === dish.id && item.cuisine === dish.cuisine);
      if (existing) {
        return prev.map((item) =>
          item.id === dish.id && item.cuisine === dish.cuisine
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...dish, quantity }];
    });
  };

  const removeFromCart = (id, cuisine) => {
    setCartItems((prev) => prev.filter((item) => !(item.id === id && item.cuisine === cuisine)));
  };

  const updateQuantity = (id, cuisine, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id, cuisine);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.cuisine === cuisine ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCartItems([]);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
