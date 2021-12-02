import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import Loading from "./Loading";
import { SiGnuprivacyguard } from "react-icons/si";
import { Link } from "react-router-dom";
const Profile = () => {
  //   first_name: "",
  // last_name: "",
  // dial_code: "+91",
  // phone: "",
  // gender: "",
  // address: "",
  // email: "",
  const [isLoading, setLoading] = useState(true);
  const [userFirstName, setUserFirstName] = useState(null);
  const [userLastName, setUserLastName] = useState(null);
  const [userPhone, setUserPhone] = useState(null);
  const [userGender, setUserGender] = useState(null);
  const [userAddress, setUserAddress] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    if (localStorage.getItem("token")) {
      var token = localStorage.getItem("token");
      var decoded = jwt_decode(token);
      console.log(decoded);
      setUserFirstName(decoded.first_name);
      setUserLastName(decoded.last_name);
      setUserPhone(decoded.phone);
      setUserGender(decoded.gender);
      setUserAddress(decoded.address);
      setUserEmail(decoded.email);
    }
  });

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : !localStorage.getItem("token") ? (
        <div className="empty-cart-container">
          <SiGnuprivacyguard />
          <br />
          <h2 style={{ color: "black" }}>Please Login or SignUp</h2>
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
      ) : (
        <div>
          First Name : {userFirstName}
          Last Name : {userLastName}
          Phone : {userPhone}
          Gender : {userGender}
          Address : {userAddress}
          Email : {userEmail}
        </div>
      )}
    </div>
  );
};

export default Profile;
