import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, TextField, Button } from "@material-ui/core";

import { otpForPassword } from "../../redux/actions/AuthActions";

import Img1 from "../images/delhivery3.gif";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "./Auth.css";

const useStyles = makeStyles({
  formStyle: {
    margin: "0px auto",
    padding: "30px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
  },
  spacing: {
    marginTop: "20px",
  },
});

const SendOtpToEmail = () => {
  const classes = useStyles();
  const message = useSelector((state) => state);
  const dispatch = useDispatch();
  const [creds, setCreds] = useState({
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(otpForPassword(creds.email));
    setCreds({ email: "" });
  };

  // console.log(message);
  if (message.auth === "OTP sent!") return <Navigate to="/resetpassword" />;

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <img src={Img1} className="auth-login-img" />
        <form
          noValidate
          autoComplete="off"
          className="signup-form"
          onSubmit={handleSubmit}
          style={{ paddingTop: "9%" }}
        >
          <Typography variant="h5" style={{ textAlign: "center" }}>
            RESET PASSWORD
          </Typography>

          <TextField
            className={classes.spacing}
            id="enter-email"
            label="Enter Email"
            variant="filled"
            fullWidth
            value={creds.email}
            onChange={(e) => setCreds({ ...creds, email: e.target.value })}
          />

          <button
            style={{ marginTop: "20px", width: "100%" }}
            className="btn btn-warning"
            type="submit"
          >
            SEND OTP
          </button>

          {/* <Button
            variant="outlined"
            color="primary"
            className={classes.spacing}
            type="submit"
          >
            SignUp
          </Button> */}
        </form>
      </div>
    </>
  );
};

export default SendOtpToEmail;
