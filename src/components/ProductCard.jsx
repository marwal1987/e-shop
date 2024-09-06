import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="w-full pb-4 gap-6 rounded-md shadow-md flex flex-col items-center justify-center ">
      <Link
        to={`/product/${product.id}`}
        className="w-full flex flex-col items-center justify-center"
      >
        <img src={product.image} alt={product.title} className="mb-6 h-96 rounded-t-md" />
        <h2 className="text-lg font-bold text-center mb-6">{product.title}</h2>
        <p className="text-gray-600 text-center mb-6">SEK {product.price}:-</p>
      </Link>
      <button
        onClick={() => addToCart(product)}
        className=" bg-blue-500 text-white p-2 m-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
