import React from "react";
import BagImage from "../../images/OthersHomeImages/bag3.jpg";
import HomeImage from "../../images/OthersHomeImages/house1.jpg";

const BagsHome = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          marginLeft: "5%",
          marginTop: "10%",
          marginBottom: "10%",
        }}
      >
        <div style={{ width: "50%", textAlign: "center", marginLeft: "12%" }}>
          <div
            style={{
              background: `url(${BagImage}) left center/345px 600px no-repeat`,
              height: "28rem",
              width: "63%",
              boxShadow: "0px 18px 53px 0px rgb(185 181 181 /95%)",
              borderRadius: "116px 0",
            }}
          >
            <button
              className="btn btn-danger"
              style={{
                borderRadius: "55px 0",
                width: "82%",
                height: "14%",
                fontSize: "x-large",
                marginTop: "107%",
              }}
            >
              BAG COLLECTIONS
            </button>
          </div>
        </div>
        <div style={{ width: "50%", textAlign: "center" }}>
          <div
            style={{
              background: `url(${HomeImage}) left center/355px 600px no-repeat`,
              height: "28rem",
              width: "67%",
              boxShadow: "0px 18px 53px 0px rgb(185 181 181 /95%)",
              borderRadius: "116px 0",
            }}
          >
            <button
              className="btn btn-danger"
              style={{
                borderRadius: "55px 0",
                width: "82%",
                height: "14%",
                fontSize: "x-large",
                marginTop: "100%",
              }}
            >
              HOME ESSENTIALS
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BagsHome;
