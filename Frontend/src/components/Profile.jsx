import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import { SiGnuprivacyguard } from "react-icons/si";
import { Link } from "react-router-dom";
const Profile = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="empty-cart-container">
          <SiGnuprivacyguard />
          <br />
          <h2 style={{ color: "black" }}>Please Login/SignUp to Continue.</h2>
          <Link
            className="btn btn-warning"
            style={{
              width: "12rem",
              fontSize: "1.5rem",
              borderRadius: "15px",
              marginRight: "2%",
            }}
            to="/signup"
          >
            SignUp
          </Link>
          <Link
            className="btn btn-primary"
            style={{
              width: "12rem",
              fontSize: "1.5rem",
              borderRadius: "15px",
            }}
            to="/login"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Profile;
