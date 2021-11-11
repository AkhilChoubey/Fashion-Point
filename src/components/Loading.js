import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Loading = () => {
  return (
    <div style={{ marginTop: "18%" }} align="center">
      <Loader
        type="BallTriangle"
        color="#0d6efd"
        height={80}
        width={80}
        timeout={3000} //3 secs
      />
    </div>
  );
};

export default Loading;
