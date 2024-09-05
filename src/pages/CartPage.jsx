import CartItem from "../components/CartItem";

const CartPage = ({ cartItems, removeFromCart }) => {
  // Funktion för att beräkna totalsumman
  const calculateTotal = () => {
    // Summera alla priser från varukorgen
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const handleCheckout = () => {

  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          <ul>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                removeFromCart={removeFromCart}
              />
            ))}
          </ul>

          {/* Visa totalsumman */}
          <div className="mt-4">
            <p className="text-lg font-bold">Total: {calculateTotal().toFixed(2)} SEK</p>
          </div>

          {/* Checkout-knappen */}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 mt-2 rounded"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;

