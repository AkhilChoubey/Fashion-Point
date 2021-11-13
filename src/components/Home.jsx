import React from "react";
import SwipeCards from "./SwipeCards";
import ParticleEffectButton from "react-particle-effect-button";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
const Home = () => {
  return (
    <div className="home" style={{ display: "flex" }}>
      <div style={{ display: "block" }}>
        <h1>BOOST YOUR STYLE SENCE</h1>
        <h3>Right here Right now!</h3>
        <AwesomeButton type="primary" style={{ outerWidth: "4rem" }}>
          Button
        </AwesomeButton>

        {/* <ParticleEffectButton
          color="#121019"
         
          duration={1000}
          style="fill"
          direction="left"
          
        >
          BUTTON CONTENT GOES HERE
        </ParticleEffectButton> */}
      </div>
      <SwipeCards />
    </div>
  );
};

export default Home;
