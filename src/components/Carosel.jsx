import React from "react";
import a11 from "./images/carosel/a11.jpg";
import a12 from "./images/carosel/a12.jpg";
import a13 from "./images/carosel/a13.jpg";
import a15 from "./images/carosel/a15.jpg";
import Carousel from "react-material-ui-carousel";
// import Carousel from "react-elastic-carousel";
import { Paper } from "@material-ui/core";
import "./Carosel.css";

const Carosel = () => {
  return (
    <div style={{ marginTop: "5%" }}>
      {" "}
      <Carousel navButtonsAlwaysVisible="true" interval="5000">
        <Paper>
          <div
            className="slider-div"
            style={{
              background: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${a11})`,
            }}
          >
            <h2 className="slider-quote">BUY 1 GET 1 (OFFER EXPIRES SOON)</h2>
          </div>
        </Paper>
        <Paper>
          <div
            className="slider-div"
            style={{
              background: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${a12})`,
            }}
          >
            <h2 className="slider-quote">UPTO 80% OFF ON KIDS WEARS</h2>
          </div>
        </Paper>
        <Paper>
          <div
            className="slider-div"
            style={{
              background: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${a13})`,
            }}
          >
            <h2 className="slider-quote">
              BEST DEALS OF THE DAY (UPTO 50% OFF ON WOMENS WEAR.)
            </h2>
          </div>
        </Paper>
      </Carousel>
    </div>
  );
};

export default Carosel;
