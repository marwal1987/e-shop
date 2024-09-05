// src/components/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover mb-2"
        />
        <h2 className="text-lg font-bold">{product.title}</h2>
        <p className="text-gray-600">${product.price}</p>
      </Link>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 bg-blue-500 text-white p-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
