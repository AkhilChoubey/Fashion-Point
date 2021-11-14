import React, { useState } from "react";
import SwipeCards from "./SwipeCards";
import ParticleEffectButton from "react-particle-effect-button";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { GoLinkExternal } from "react-icons/go";
import SideBar from "./SideBar";

const Home = () => {
  const [buttonEffect, setButtonEffect] = useState(false);
  return (
    <div className="home">
      <div style={{ display: "block" }}>
        <h1>BOOST YOUR STYLE SENCE</h1>
        <h3>Right here Right now!</h3>

        <button
          className="btn btn-outline-dark btn-explore btn-lg"
          style={{ borderRadius: "16px 0 16px 0" }}
        >
          EXPLORE <GoLinkExternal />
        </button>
      </div>

      <SwipeCards />
      <SideBar />
    </div>
  );
};

export default Home;

/* <div
          style={{ marginLeft: "34%", marginTop: "3%" }}
          onClick={() => {
            if (buttonEffect === true) {
              setButtonEffect(false);
            } else if (buttonEffect === false) setButtonEffect(true);
          }}
        >
          <ParticleEffectButton
            color="rgb(247, 8, 235)"
            duration={2000}
            style="stroke"
            direction="left"
            hidden={buttonEffect}
            onBegin={() => {
              if (buttonEffect === true) {
                setButtonEffect(false);
              } else if (buttonEffect === false) setButtonEffect(true);
            }}
            onComplete={() => {
              if (buttonEffect === true) {
                setButtonEffect(false);
                // } else if (buttonEffect === false) setButtonEffect(true);
              }
            }}
          >
            EXPLORE
          </ParticleEffectButton>
        </div> */
