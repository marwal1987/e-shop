import React from 'react';

function CartItem({ item, removeFromCart }) {
    const handleRemoveClick = () => {
        removeFromCart(item.id);
    };

    return (
        <li>
            {item.name} - {item.price} SEK
            <button onClick={handleRemoveClick}>Remove</button>
        </li>
    );
}

export default CartItem;
