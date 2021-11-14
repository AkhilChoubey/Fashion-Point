import React from "react";
import { SocialIcon } from "react-social-icons";
import "./SideBar.css";
{
  /* <SocialIcon url="https://twitter.com/jaketrent" />; */
}
const SideBar = () => {
  return (
    <div id="sidebar">
      <div class="social facebook">
        <a href=" https://www.facebook.com " target="_blank">
          <p>
            Like on Facebook{" "}
            <SocialIcon
              className="social-icons"
              url="https://twitter.com/jaketrent"
            />{" "}
          </p>
        </a>
      </div>
      <div class="social twitter">
        <a href=" https://www.twitter.com " target="_blank">
          <p>
            Follow on Twitter
            <SocialIcon
              className="social-icons"
              url="https://twitter.com/jaketrent"
            />{" "}
          </p>
        </a>
      </div>
      <div class="social google">
        <a href=" https://www.plus.google.com " target="_blank">
          <p>
            &nbspAdd on Google+
            <SocialIcon
              className="social-icons"
              url="https://twitter.com/jaketrent"
            />{" "}
          </p>
        </a>
      </div>
      <div class="social youtube">
        <a href=" https://www.youtube.com " target="_blank">
          <p>
            Subscribe on Youtube
            <SocialIcon url="https://twitter.com/jaketrent" />{" "}
          </p>
        </a>
      </div>
      <div class="social linkedin">
        <a href=" https://www.linkedin.com " target="_blank">
          <p>
            Connect on LinkedIn
            <SocialIcon url="https://twitter.com/jaketrent" />{" "}
          </p>
        </a>
      </div>
    </div>
  );
};

/* <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></br> */

export default SideBar;
