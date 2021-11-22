import React, { useEffect } from "react";
import AccessoryImage from "../../images/OthersHomeImages/accessory1.png";
import Aos from "aos";
import "aos/dist/aos.css";

const AccessoryHome = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ marginLeft: "9%" }}>
          <h1 style={{ fontSize: "4.5rem" }}>
            Your <span style={{ color: "rgb(248 18 41)" }}> Accessories</span>{" "}
            <br /> Search ends here.
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
        <img
          style={{ width: "25rem" }}
          src={AccessoryImage}
          data-aos="zoom-out"
        />
      </div>
    </>
  );
};

export default AccessoryHome;
