import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";
import { useHistory } from "react-router";

const initialState = {
  token: localStorage.getItem("token"),
  first_name: null,
  last_name: null,
  dial_code: "+91",
  phone: null,
  gender: null,
  email: null,
};

const authReducer = (state = initialState, action) => {
  const history = useHistory();

  switch (action.type) {
    case "SIGN_UP":
    case "SIGN_IN":
    case "USER_LOADED":
      const user = jwtDecode(action.token);
      toast.success(`Hello, ${user.first_name}`, {
        theme: "colored",
        position: toast.POSITION.TOP_RIGHT,
      });
      // toast(`Hello, ${user.first_name}`, {
      //   position: toast.POSITION.TOP_RIGHT,
      // });
      return {
        ...initialState,
        token: action.token,
        first_name: user.first_name,
        last_name: user.last_name,
        dial_code: "+91",
        phone: user.phone,
        gender: user.gender,
        email: user.email,
      };
    case "OTP_PASSWORD":
      toast.success(`OTP Successfully Sent!`, {
        theme: "colored",
        position: toast.POSITION.TOP_RIGHT,
      });
      history.push({
        pathname: "/resetpassword",
      });

    case "SIGN_OUT":
      localStorage.removeItem("token");
      toast.success("Successfully Logged Out!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "colored",
      });
      return {
        token: null,
        first_name: null,
        last_name: null,
        dial_code: "+91",
        phone: null,
        gender: null,
        email: null,
      };
    default:
      return state;
  }
};

export default authReducer;
