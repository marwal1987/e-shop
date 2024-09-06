import React from "react";

function CartItem({ item, removeFromCart }) {
  return (
    <li className="w-2/3 grid grid-cols-4 gap-12 items-center shadow-lg p-4">
      {/* Display the product image */}
      <img src={item.image} alt={item.title} style={{ width: "100px", height: "100px" }} />
      
      {/* Display the product title and name */}
        <h4>{item.title}</h4>
     
        <p>SEK {item.price}</p>
      
      {/* Remove button */}
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold rounded h-9 w-24" onClick={() => removeFromCart(item.id)}>Remove</button>
    </li>
  );
}

export default CartItem;
