import React from "react";

function CartItem({ item, removeFromCart }) {
  return (
    <li>
      {/* Display the product image */}
      <img src={item.image} alt={item.title} style={{ width: "100px", height: "100px" }} />
      
      {/* Display the product title and name */}
      <div>
        <h4>{item.title}</h4>
        <p>{item.name} - {item.price} SEK</p>
      </div>

      {/* Remove button */}
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ml-2 mt-2 mb-2 rounded" onClick={() => removeFromCart(item.id)}>Remove</button>
    </li>
  );
}

export default CartItem;
