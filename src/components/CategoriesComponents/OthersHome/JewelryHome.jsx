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
      <div className="others-container" style={{ marginTop: "10%" }}>
        <img
          className="others-first-child others-image"
          src={JewelryImage}
          data-aos="zoom-out"
        />
        <div style={{ marginLeft: "10%" }}>
          <h1 className="others-text">
            Surprise Your Loved One's With Our{" "}
            <span style={{ color: "rgb(248 18 41)" }}>Jewellery</span>{" "}
            Collection.
          </h1>
          <button className="others-expore-btn btn btn-warning btn-lg">
            EXPLORE
          </button>
        </div>
      </div>
    </>
  );
};

export default JewelryHome;
