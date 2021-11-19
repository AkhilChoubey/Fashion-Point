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
        photos={props.photos}
        price={"$ " + props.price}
        productName={props.productName}
        description={props.description}
        // style={{ height: "10rem" }}
      />
      <div
        onClick={() => {
          selectButton === false
            ? setSelectButton(true)
            : setSelectButton(true);
        }}
        className="product-card-btn"
      >
        <button
          className="btn btn-warning btn-lg "
          onClick={props.addItem}
          style={{
            color: selectButton === true ? "white" : "Black",
            background: selectButton === true ? "#238636" : "#ffc107",
            borderColor: selectButton === true ? "#238636" : "#ffc107",
            fontSize: selectButton && "1.1rem",
            width: "100%",
          }}
        >
          {selectButton === true ? "ITEM ADDED TO CART!" : "ADD TO CART"}
        </button>
      </div>
    </div>
  );
};

export default Productcard;
