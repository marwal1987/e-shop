import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productService from "../services/productService";

const ProductPage = ({ addToCart }) => {
  const { id } = useParams(); // extrahera produkt-ID från URL. Så att sidan kan visa rätt produkt baserat på vilken URL som besöks
  const [product, setProduct] = useState(null); // State för produkter.
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await productService.getProductById(id);
        setProduct(data); // Tilldelar product värdet av 'data' från fetchen
      } catch (err) {
        // Fel-hantering
        setError("Could not fetch the product.");
      } finally {
        setLoading(false); // Sätt loading till false
      }
    };

    fetchProduct();
  }, [id]); // useEffect körs varje gång id ändras (t.ex. när man navigerar till en annan produkt).

  if (loading) return <div className="max-w-full h-screen flex flex-col items-center justify-center m-auto">Loading product...</div>;
  if (error) return <div className="max-w-full h-screen flex flex-col items-center justify-center m-auto">{error}</div>;

  return (
    <div className="w-[80%] h-screen items-center m-auto py-12">
      {product ? (
        <div className="flex gap-12 items-center shadow-lg p-12">
          <img src={product.image} alt={product.title} className="max-w-full" />
          
          <div className="flex flex-col gap-12">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-lg">{product.description}</p>
          <p className="text-2xl font-bold">SEK {product.price}</p>
          <button className="mt-2 bg-blue-500 text-white p-2 rounded" onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        </div>
      ) : (
        <div>No product found</div>
      )}
    </div>
  );
};

export default ProductPage;
