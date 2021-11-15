import React from "react";
import { SocialIcon } from "react-social-icons";
import "./SideBar.css";
import { FaFacebookSquare } from "react-icons/fa";

{
  /* <SocialIcon url="https://twitter.com/jaketrent" />; */
}
const SideBar = () => {
  return (
    <div id="sidebar">
      <div class="social facebook">
        <a
          className="sidebar-link"
          href=" https://www.facebook.com/profile.php?id=100009258792168 "
          target="_blank"
        >
          <p>
            Like on Facebook
            <SocialIcon
              className="social-icons"
              url="https://www.facebook.com/profile.php?id=100009258792168"
            />
          </p>
        </a>
      </div>
      <div class="social twitter">
        <a
          className="sidebar-link"
          href=" https://twitter.com/AkhilKrChoubey1?t=X96s_nnAIvMM096_RWsoYg&s=08 "
          target="_blank"
        >
          <p>
            Follow on Twitter
            <SocialIcon
              className="social-icons"
              url="https://twitter.com/AkhilKrChoubey1?t=X96s_nnAIvMM096_RWsoYg&s=08"
            />{" "}
          </p>
        </a>
      </div>
      <div class="social google">
        <a
          className="sidebar-link"
          href="https://www.instagram.com/ironakhil/ "
          target="_blank"
        >
          <p>
            Follow on Instagram
            <SocialIcon
              className="social-icons"
              url="https://www.instagram.com/ironakhil/"
            />{" "}
          </p>
        </a>
      </div>
      <div class="social youtube">
        <a
          className="sidebar-link"
          href="https://github.com/AkhilChoubey"
          target="_blank"
        >
          <p>
            Follow on Github
            <SocialIcon url="https://github.com/AkhilChoubey" />{" "}
          </p>
        </a>
      </div>
      <div class="social linkedin">
        <a
          className="sidebar-link"
          href=" https://www.linkedin.com/in/akhil-choubey-376887192/"
          target="_blank"
        >
          <p>
            Connect on LinkedIn
            <SocialIcon url="https://www.linkedin.com/in/akhil-choubey-376887192/" />{" "}
          </p>
        </a>
      </div>
    </div>
  );
};

/* <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></br> */

export default SideBar;
