import React, { useEffect, useState } from "react";
import Loading from "./Loading";

const Kids = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  return (
    <div>{isLoading ? <Loading /> : <h1> This is Kids Component</h1>}</div>
  );
};

export default Kids;
