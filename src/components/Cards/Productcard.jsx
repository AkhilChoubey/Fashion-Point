import React, { useState } from "react";
import { ProductCard } from "react-ui-cards";

const Productcard = (props) => {
  const [selectButton, setSelectButton] = useState(false);

  return (
    <div
      className="col-md-3 col-sm-6 col-6 "
      style={{ marginBottom: "10%", margin: "5%", position: "relative" }}
      title={props.productName}
    >
      <ProductCard
        photos={[props.photos]}
        price={props.price}
        productName={props.productName}
        description={props.description}
        style={{ height: "10rem" }}
      />
      <button
        className="btn btn-warning btn-lg product-card-btn"
        onClick={() => {
          return props.addItem, setSelectButton(true);
        }}
        style={{
          color: selectButton && "white",
          background: selectButton && "#238636",
        }}
      >
        {selectButton === true ? "Added to Cart!" : "Add to cart"}
      </button>
    </div>
  );
};

export default Productcard;
