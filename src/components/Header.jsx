// Example: Header.js
import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

// cartItems skickar vi ner från App.jsx och visar längden på arrayen med cartItems.length rad 19
const Header = ({ cartItems }) => {
  return (
    <header className="bg-gray-900 sticky top-0 z-[20] mx-auto flex w-full items-center justify-between border-b-4- p-5 text-white">
      <h1>
        <strong className="text-teal-400 p-6 m-0">Fake Store</strong>
      </h1>
      <NavLink to="/">
        <FaHome size={20} />
      </NavLink>
      <NavLink to="/cart">
        <FaShoppingCart size={20} />
        <span>{cartItems.length}</span>
      </NavLink>
    </header>
  );
};

export default Header;
