import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import Loading from "./Loading";
import { SiGnuprivacyguard } from "react-icons/si";
import { Link } from "react-router-dom";
import GirlProfile from "./images/girl-profile1.gif";
import MenProfile from "./images/men-profile1.gif";
import "./Profile.css";

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
        <div
          className="profile-container"
          // style={{
          //   display: "flex",
          //   justifyContent: "space-around",
          //   fontSize: "2.5rem",
          // }}
        >
          {userGender === "Female" ? (
            <img
              className="profile-img"
              // style={{ marginLeft: "5%", width: "35%" }}
              src={GirlProfile}
            />
          ) : (
            <img
              className="profile-img"
              // style={{ marginLeft: "5%", width: "35%" }}
              src={MenProfile}
            />
          )}
          <div
            className="profile-table-container"
            // style={{
            //   marginTop: "5%",
            //   width: "-webkit-fill-available",
            //   paddingLeft: "6%",
            // }}
          >
            <table
              className="profile-table"
              // style={{
              //   borderSpacing: "30px",
              //   padding: "5%",
              //   width: "100%",
              //   tableLayout: "auto",
              // }}
            >
              <tbody>
                <tr>
                  <td style={{ fontWeight: "500" }}>First Name</td>
                  <td
                    style={{
                      backgroundColor: "aliceblue",
                      paddingLeft: 10,
                      borderBottomColor: "white",
                      borderBottomWidth: "5px",
                      color: "grey",
                    }}
                  >
                    {userFirstName}
                  </td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "500" }}>Last Name</td>
                  <td
                    style={{
                      backgroundColor: "aliceblue",
                      paddingLeft: 10,
                      borderBottomColor: "white",
                      borderBottomWidth: "5px",
                      color: "grey",
                    }}
                  >
                    {userLastName}
                  </td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "500" }}>Phone</td>
                  <td
                    style={{
                      backgroundColor: "aliceblue",
                      paddingLeft: 10,
                      borderBottomColor: "white",
                      borderBottomWidth: "5px",
                      color: "grey",
                    }}
                  >
                    {userPhone}
                  </td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "500" }}>Gender</td>
                  <td
                    style={{
                      backgroundColor: "aliceblue",
                      paddingLeft: 10,
                      borderBottomColor: "white",
                      borderBottomWidth: "5px",
                      color: "grey",
                    }}
                  >
                    {userGender}
                  </td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "500" }}>Address</td>
                  <td
                    className="address-text"
                    style={{
                      backgroundColor: "aliceblue",
                      paddingLeft: 10,
                      borderBottomColor: "white",
                      borderBottomWidth: "5px",
                      color: "grey",
                      maxWidth: "25rem",
                      display: "inline-block",
                      wordWrap: "break-word",
                    }}
                  >
                    {userAddress}
                  </td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "500" }}>Email</td>
                  <td
                    style={{
                      backgroundColor: "aliceblue",
                      paddingLeft: 10,
                      borderBottomColor: "white",
                      borderBottomWidth: "5px",
                      color: "grey",
                    }}
                  >
                    {userEmail}
                  </td>
                </tr>
              </tbody>
            </table>
            {/* First Name : {userFirstName}
            <br />
            Last Name : {userLastName}
            <br />
            Phone {"    "}: {userPhone}
            <br />
            Gender{"    "} : {userGender}
            <br />
            Address{"  "} : {userAddress}
            <br />
            Email{"  "} : {userEmail}
            <br /> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
