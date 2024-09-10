import React from "react";
import { FaTrashAlt } from "react-icons/fa";
// 269 × 384 px
function CartItem({ item, removeFromCart }) {
  return (
    <li className="w-2/3 grid grid-cols-3 gap-12 items-center shadow-lg p-4">
      {/* Display the product image */}
      <img src={item.image} alt={item.title} style={{ width: "100px" }} />

      {/* Display the product title */}
      <h4>{item.title}</h4>

      <div className="flex items-center justify-around">
        <p className="font-bold">${item.price}</p>

        {/* Remove button */}
        {/* <button className="bg-red-500 hover:bg-red-700 text-white font-bold rounded h-9 w-24" onClick={() => removeFromCart(item.id)}>Remove</button> */}
        <FaTrashAlt
          className="font-bold text-red-500 hover:text-red-700"
          onClick={() => removeFromCart(item.id)}
        />
      </div>
    </li>
  );
}

export default CartItem;
