import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import { useCart } from "react-use-cart";
const Cart = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : isEmpty ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <h1>Cart ({totalUniqueItems})</h1>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.quantity} x {item.name} &mdash;
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button onClick={() => removeItem(item.id)}>&times;</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cart;
