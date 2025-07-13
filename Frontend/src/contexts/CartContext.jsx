// import { createContext, useState } from "react";

// export const CartContext = createContext();

// const CartContextProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems((prev) => [...prev, product]);
//   };

//   const removeFromCart = (id) => {
//     setCartItems((prev) => prev.filter((item) => item.id !== id));
//   };

//   const clearCart = () => {
//     setCartItems([]);
//   };
  

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartContextProvider;


import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existing = cartItems.find((item) => item.id === product.id);
    if (existing) {
      updateQuantity(product.id, existing.quantity + 1);
    } else {
      setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const updateQuantity = (id, newQuantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity, // ✅ now properly included
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
