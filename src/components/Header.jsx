// Example: Header.js
import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

// cartItems skickar vi ner från App.jsx och visar längden på arrayen med cartItems.length rad 19
const Header = ({ cartItems }) => {
  return (
    <header className="bg-gray-900 sticky top-0 z-[20] flex w-full items-center justify-between p-6 text-white">
      <img className="text-teal-400 m-0 font-bold" alt="LOGO" />

      <NavLink to="/">
        <FaHome size={20} />
      </NavLink>

      <NavLink to="/cart">
        <div className="flex gap-2">
          <FaShoppingCart size={20} />
          <span className="text-sm">{cartItems.length}</span>
        </div>
      </NavLink>
    </header>
  );
};

export default Header;
