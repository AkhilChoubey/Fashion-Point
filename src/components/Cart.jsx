import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import { useCart } from "react-use-cart";
const Cart = () => {
  const [isLoading, setLoading] = useState(true);
  const [totalAmount, setTotalAmount] = useState(0);

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
    cartTotal,
  } = useCart();

  useEffect(() => {
    items.forEach((m) => {
      setTotalAmount((pre) => {
        return pre + m.item;
      });
    });
  }, []);
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
                <img src={item.image_url} />
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
          <h1>Total Amount :$ {Math.round(cartTotal * 100) / 100}</h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
