import React from "react";
import BagImage from "../../images/OthersHomeImages/bag3.jpg";
import HomeImage from "../../images/OthersHomeImages/house1.jpg";

const BagsHome = () => {
  return (
    <>
      <div style={{ display: "flex", marginLeft: "5%" }}>
        <div style={{ width: "50%", textAlign: "center" }}>
          <div
            style={{
              background: `url(${BagImage}) left center/345px 600px no-repeat`,
              height: "28rem",
              width: "51%",
            }}
          >
            <h1>BAG COLLECTIONS</h1>
            <button>EXPLORE</button>
          </div>
        </div>
        <div style={{ width: "50%", textAlign: "center" }}>
          <div
            style={{
              background: `url(${HomeImage}) left center/345px 600px no-repeat`,
              height: "28rem",
              width: "67%",
            }}
          >
            <h1>HOME ESSENTIALS</h1>
            <button>EXPLORE</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BagsHome;
