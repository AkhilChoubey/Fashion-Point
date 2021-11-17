import React from "react";
import { ProductCard } from "react-ui-cards";

const Productcard = (props) => {
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
        className="btn btn-warning btn-lg"
        onClick={props.addItem}
        style={{
          width: "370%",
          position: "absolute",
          top: "84%",
          marginLeft: "50%",
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Productcard;
