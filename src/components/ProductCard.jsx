import React from "react";
import { Link } from "react-router-dom";

// --- Martin ---
// Tar emot props från HomePage.jsx:
//'products' objekt med data från productService.getAllProducts()

// Link används för att länka till en enskild produktsida baserat på produktens id (t.ex. /product/1).
const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="w-full pb-4 gap-6 rounded-md shadow-md flex flex-col items-center justify-center ">
      <Link
        to={`/product/${product.id}`}
        className="w-full flex flex-col items-center justify-center"
      >
        <img src={product.image} alt={product.title} className="mb-6 h-96 rounded-t-md" />
        <h2 className="text-lg font-bold text-center mb-6">{product.title}</h2>
      </Link>
        <p className="text-gray-600 text-center mb-6">${product.price}</p>
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

/*
Varför använda Link?

När man använder Link (från react-router-dom-biblioteket), skapar man en länk i som inte gör en fullständig sidladdning, som en vanlig HTML-länk skulle göra.
Reacts interna routing-system användes istället för att uppdatera URL och rendera rätt komponent utan att sidan behöver laddas om helt. Applikationen blir snabbare och mer responsiv.
*/