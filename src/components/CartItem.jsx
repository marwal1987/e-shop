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
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </li>
  );
}

export default CartItem;
