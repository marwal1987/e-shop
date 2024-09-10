// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

const App = () => {
  // Hantera/dela varukorgen och funktioner kopplade till den mellan sidorna med hjälp av props (Martin)
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };
  
  // Clearing the cart when the user is clicking the Checkout button (Isabelle)
  const clearCart = () => {
    setCartItems([]); // Clear all items from the cart
  };
  
  //id: är en dynamisk parameter i URLn. Det betyder att det som kommer efter /product/ fångas upp och skickas vidare som en variabel.
  return (
    <Router>
      <Header cartItems={cartItems} />
      <Routes> {/* Definerar olika URL:er och kopplar till sidorna */}
        <Route path="/" element={<HomePage addToCart={addToCart} />} />
        <Route
          path="/product/:id" 
          element={<ProductPage addToCart={addToCart} />} 
        />
        <Route
          path="/cart"
          element={
            <CartPage cartItems={cartItems} removeFromCart={removeFromCart} clearCart={clearCart}/>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
