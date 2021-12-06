import React, { useEffect, useState } from "react";
import Loading from "../Loading";

const ConfirmOrder = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });
  return (
    <>{isLoading ? <Loading /> : <div> This is ConfirmOrder component.</div>}</>
  );
};

export default ConfirmOrder;
