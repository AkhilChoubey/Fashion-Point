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
            <h2 className="slider-quote">
              "A RECIPE IS A STORY WHICH ENDS WITH A GOOD MEAL"
            </h2>
            <p>-Pat Conroy</p>
          </div>
        </Paper>
        <Paper>
          <div
            className="slider-div"
            style={{
              background: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${a12})`,
            }}
          >
            <h2 className="slider-quote">
              "A RECIPE HAS NO SOUL. YOU, AS THE COOK, MUST BRING SOUL TO THE
              RECIPE"
            </h2>
            <p>-Thomas Keeler</p>
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
              "PUT UP A CHAIR. TAKE A TASTE. COME JOIN US. LIFE IS SO ENDLESSLY
              DELICIOUS."
            </h2>
            <p>-Ruth Reichl</p>
          </div>
        </Paper>
        <Paper>
          <div
            className="slider-div"
            style={{
              background: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${a15})`,
            }}
          >
            <h2 className="slider-quote">
              "PUT UP A CHAIR. TAKE A TASTE. COME JOIN US. LIFE IS SO ENDLESSLY
              DELICIOUS."
            </h2>
            <p>-Ruth Reichl</p>
          </div>
        </Paper>
      </Carousel>
    </div>
  );
};

export default Carosel;
