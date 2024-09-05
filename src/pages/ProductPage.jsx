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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {product ? (
        <div>
          <h1>{product.title}</h1>
          <img src={product.image} alt={product.title} className="max-w-40" />
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ) : (
        <div>No product found</div>
      )}
    </div>
  );
};

export default ProductPage;
