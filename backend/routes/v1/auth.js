const express = require("express");
const login = require("../../controllers/auth/login");
const validator = require("../../middlewares/validator");
const auth = require("../../middlewares/auth");
const register = require("../../controllers/auth/register");
const otp = require("../../controllers/auth/otp");
const resetPassword = require("../../controllers/auth/resetPassword");

const router = express.Router();

//Login Route
router.post("/login", validator.loginForm(), validator.validate, login.loginByPassword);

//Register Route 
router.post("/register", validator.createAccountForm(), validator.validate, register.createAccount);
router.get("/register", register.showAccounts);
router.delete("/register/:user_id", register.deleteById);

//Otp To Email Route
router.post("/sendOtpToEmail", validator.emailOtp(), validator.validate, otp.sendOtp);

//Reset Password with OTP
router.post("/resetPasswordWithOtp", validator.resetPasswordCheck(), validator.validate, resetPassword.resetUsingOtp);

module.exports = router;

