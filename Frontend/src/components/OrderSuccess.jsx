import React from "react";
import tickImg from "./images/OrderSuccess/orderSuccess5.gif";
import truckImg from "./images/OrderSuccess/movingTruck1.gif";
import greenTick from "./images/OrderSuccess/greenTick2.png";
const OrderSuccess = () => {
  return (
    <>
      <div style={{ backgroundColor: "#f2f2f2" }}>
        <div
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "3.5%",
          }}
        >
          <img src={greenTick} style={{ height: "8rem" }} />
          <h1 style={{ marginLeft: "2%" }}>Order Successfully Placed!</h1>
        </div>
        <div style={{ textAlign: "center" }}>
          <img style={{ width: "40%", height: "20rem" }} src={truckImg} />
        </div>
      </div>
    </>
  );
};

export default OrderSuccess;
