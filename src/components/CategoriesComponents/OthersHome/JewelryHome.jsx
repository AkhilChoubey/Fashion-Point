import React, { useEffect } from "react";
import JewelryImage from "../../images/OthersHomeImages/jewelry1.png";
import Aos from "aos";
import "aos/dist/aos.css";

const JewelryHome = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div style={{ display: "flex", marginTop: "10%" }}>
        <img
          style={{ width: "25rem", marginLeft: "9%" }}
          src={JewelryImage}
          data-aos="zoom-out"
        />
        <div style={{ marginLeft: "10%" }}>
          <h1 style={{ fontSize: "3.5rem" }}>
            Surprise Your Loved one's With Our{" "}
            <span style={{ color: "rgb(248 18 41)" }}>Jewellery</span>{" "}
            Collection.
          </h1>
          <button
            style={{
              marginTop: "5%",
              width: "16rem",
              height: "4.5rem",
              fontSize: "2rem",
              borderRadius: "65px 0",
            }}
            className="btn btn-warning btn-lg"
          >
            EXPLORE
          </button>
        </div>
      </div>
    </>
  );
};

export default JewelryHome;
