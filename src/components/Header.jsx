// Example: Header.js
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 sticky top-0 z-[20] mx-auto flex w-full items-center justify-between border-b-4- p-8 text-white">
      <h1>Logo</h1>
      <NavLink to="/HomePage.jsx">Home</NavLink>
      <NavLink to="/CartPage.jsx">Cart</NavLink>
    </header>
  )
};

export default Header;
