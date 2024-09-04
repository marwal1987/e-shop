// App.jsx
// import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
// import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

const App = () => {
  // Förslag på att hantera cartItems "globalt"
  // const [cartItems, setCartItems] = useState([]);

  // const addToCart = (product) => {
  //   setCartItems((prevItems) => [...prevItems, product]);
  // };

  // const removeFromCart = (productId) => {
  //   setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  // };

  // Lägga skicka dess isånnafall t.ex. <Header cartItems={cartItems}/>
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route
          path="/product/:id"
          element={<ProductPage/>}
        /> */}
        <Route
          path="/cart"
          element={
            <CartPage/>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
