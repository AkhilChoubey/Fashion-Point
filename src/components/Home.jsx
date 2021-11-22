import React, { useEffect } from "react";
import SwipeCards from "./SwipeCards";
// import ParticleEffectButton from "react-particle-effect-button";
// import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { GoLinkExternal } from "react-icons/go";
import SideBar from "./SideBar";
import Aos from "aos";
import "aos/dist/aos.css";
import Carosel from "./Carosel";
import Categories from "./Categories";
import { Link } from "react-router-dom";
import AccessoryHome from "./CategoriesComponents/OthersHome/AccessoryHome";
import JewelryHome from "./CategoriesComponents/OthersHome/JewelryHome";
import BeautyHome from "./CategoriesComponents/OthersHome/BeautyHome";
import BagsHome from "./CategoriesComponents/OthersHome/BagsHome";
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div style={{ display: "block" }} className="super-root-home">
      <div className="root-home">
        {/* <SideBar /> */}
        <div className="home">
          <div style={{ display: "block" }}>
            <h1>BOOST YOUR STYLE SENCE</h1>
            <h3>Right here Right now!</h3>

            <Link
              className="btn-explore btn btn-danger btn-lg"
              to="/categories"
              style={{ fontSize: "2rem", borderRadius: "65px 0" }}
            >
              EXPLORE <GoLinkExternal />
            </Link>
          </div>

          <SwipeCards />
        </div>
      </div>
      <div className="home-carosel">
        <Carosel />
      </div>
      <Categories />
      <AccessoryHome />
      <JewelryHome />
      <BeautyHome />
      <BagsHome />
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
