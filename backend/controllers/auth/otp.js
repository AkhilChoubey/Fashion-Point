const asyncHandler = require("../../utils/async");
const Users = require("../../models/Users");
const validator = require("../../middlewares/validator");
const dayjs = require('dayjs');

exports.sendOtp = asyncHandler(async (req, res, next) => {
    if ((await validator.emailExists(req.body.email)).length > 0) {

        let otp = Math.floor(100000 + Math.random()*900000);

        let current_date = dayjs().format('YYYY-MM-DD HH:mm:ss');
        let expiry_date = dayjs(current_date).add(15,'m').toDate();

        await Users.emailOtpEntry({email: req.body.email, otp: otp, expiry_date: expiry_date, is_verified:0});
      
        res.status(200).json({data:{ otp: otp }, message: "OTP sent!"});
    }
    else {
        res.status(404).json({
            data: [],
            message: "Email does not exists!"
        })
    }
})
