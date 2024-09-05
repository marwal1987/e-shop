import React, { useState, useEffect } from "react";
import productService from "../services/productService"; // Importera productService för att hämta produkter
import ProductCard from "../components/ProductCard";

const HomePage = ({ addToCart }) => {
  // State för att lagra produkterna
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect för att hämta produkterna när komponenten monteras
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getAllProducts();
        setProducts(data); // Spara produkterna i state
      } catch (error) {
        setError("Failed to fetch products"); // Hantera fel
      } finally {
        setLoading(false); // Sätt loading till false oavsett om fetchen lyckas eller misslyckas
      }
    };

    fetchProducts();
  }, []);

  // Om laddar visas en laddningsindikator
  if (loading) return <div>Loading...</div>;

  // Om det finns ett fel, visa felmeddelandet
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          /> // Rendera ProductCard för varje produkt och skicka med addToCart funktionen från App.jsx
        ))}
      </div>
    </div>
  );
};

export default HomePage;
