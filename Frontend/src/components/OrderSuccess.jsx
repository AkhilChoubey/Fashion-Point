import React from "react";
import tickImg from "./images/OrderSuccess/orderSuccess5.gif";
import truckImg from "./images/OrderSuccess/movingTruck1.gif";
import greenTick from "./images/OrderSuccess/greenTick2.png";
import "./OrderSuccess.css";

const OrderSuccess = () => {
  return (
    <>
      <div style={{ backgroundColor: "#f2f2f2" }}>
        <div className="order-success-container">
          <img src={greenTick} style={{ height: "8rem" }} />
          <h1>Order Successfully Placed!</h1>
        </div>
        <div style={{ textAlign: "center" }}>
          <img className="order-success-truck-img" src={truckImg} />
        </div>
      </div>
    </>
  );
};

export default OrderSuccess;
