import React, { useEffect, useState } from "react";
import Loading from "./Loading";

const Cart = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  return (
    <div>{isLoading ? <Loading /> : <h1> This is Cart Component</h1>}</div>
  );
};

export default Cart;
