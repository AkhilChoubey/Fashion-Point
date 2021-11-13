import React, { useEffect, useState } from "react";
import Loading from "./Loading";

const Categories = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  return (
    <div>
      {isLoading ? <Loading /> : <h1> This is Categories Component</h1>}
    </div>
  );
};

export default Categories;
