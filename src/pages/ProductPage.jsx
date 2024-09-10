import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productService from "../services/productService";

// --- Martin ---

const ProductPage = ({ addToCart }) => {
  const { id } = useParams(); // Hämta produktens Id från URL:en. useParams() returnerar ett objekt där varje dynamisk del av URL (i detta fall id) finns tillgängligt.
  const [product, setProduct] = useState(null); // State för produkter.
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // En fetch i en useEffect som körs vid första rendering och om id förändras. Produktens id används för att göra en API-förfrågan, och när datan har hämtats uppdateras komponentens state för att visa den produkten på sidan.
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await productService.getProductById(id);
        setProduct(data); // Tilldelar 'product' statet värdet av 'data' från fetchen
      } catch (err) {
        // Fel-hantering
        setError("Could not fetch the product.");
      } finally {
        setLoading(false); // Sätt loading till false
      }
    };

    fetchProduct();
  }, [id]); // useEffect Lyssnar på id och körs varje gång id ändras (t.ex. när man navigerar till en annan produkt).

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


/*
Vad gör useParams:
useParams hooken returnerar ett objekt med nyckel/värde-par för de dynamiska parametrarna från den aktuella URL
som matchades av <Route path>. Childroutes, ärver alla parametrar från sina föräldrars routes.

const { id } = useParams();
Om användaren är på /product/1, kommer { id } att vara 1
*/