import React, { useEffect } from "react";
import BeautyImage from "../../images/OthersHomeImages/beauty1.png";
import Aos from "aos";
import "aos/dist/aos.css";

const BeautyHome = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="others-container" style={{ marginTop: "10%" }}>
        <div className="others-first-child">
          <h1 className="others-text">
            You are Amazing Just Like <br /> Our{" "}
            <span style={{ color: "rgb(248 18 41)" }}>Products.</span>
          </h1>
          <button className="others-expore-btn btn btn-warning btn-lg">
            EXPLORE
          </button>
        </div>
        <img className="others-image" src={BeautyImage} data-aos="zoom-out" />
      </div>
    </>
  );
};

export default BeautyHome;
