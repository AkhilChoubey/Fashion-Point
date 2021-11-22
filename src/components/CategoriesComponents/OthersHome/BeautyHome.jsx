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
      <div style={{ display: "flex", marginTop: "10%" }}>
        <div style={{ marginLeft: "9%" }}>
          <h1 style={{ fontSize: "3.5rem" }}>
            You are Amazing just like <br /> Our{" "}
            <span style={{ color: "rgb(248 18 41)" }}>Products.</span>
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
        <img style={{ width: "25rem" }} src={BeautyImage} data-aos="zoom-out" />
      </div>
    </>
  );
};

export default BeautyHome;
