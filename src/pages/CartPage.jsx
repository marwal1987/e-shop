import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";

const CartPage = ({ cartItems, removeFromCart, clearCart }) => {
  // Use navigate()
  const navigate = useNavigate();
  // Funktion för att beräkna totalsumman
  const calculateTotal = () => {
    // Summera alla priser från varukorgen
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const handleCheckout = () => {
    // Clear the cart
    clearCart();

    // Navigate back to the Homepage 
    navigate("/");
  };

  return (
    <div className="w-2/3 m-auto flex flex-col items-center justify-start h-screen gap-12 border-2 overflow-scroll ">
      <h1 className="text-2xl mt-12">Your Cart</h1>
      {cartItems.length > 0 ? (
        <div className="flex flex-col items-center gap-12">
          <ul className="flex flex-col items-center gap-12">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                removeFromCart={removeFromCart}
              />
            ))}
          </ul>

          {/* Visa totalsumman */}
        
            <p className="text-xl font-bold">
              Total: ${calculateTotal().toFixed(2)}
            </p>
          

          {/* Checkout-knappen */}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 m-2 rounded"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      ) : (
        <h3 className="max-w-full h-screen">Your cart is empty.</h3>
      )}
    </div>
  );
};

export default CartPage;