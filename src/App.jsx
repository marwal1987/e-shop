// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

const App = () => {
  // Förslag på att hantera cartItems "globalt"
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  // Clearing the cart when the user is clicking the Checkout button

  const clearCart = () => {
    setCartItems([]); // Clear all items from the cart
  };

  // Lägga skicka dess isånnafall t.ex. <Header cartItems={cartItems}/>
  return (
    <Router>
      <Header cartItems={cartItems} />
      <Routes>
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
