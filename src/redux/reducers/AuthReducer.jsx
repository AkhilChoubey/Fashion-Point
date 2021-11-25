import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";

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
  switch (action.type) {
    case "SIGN_UP":
    case "SIGN_IN":
    case "USER_LOADED":
      const user = jwtDecode(action.token);
      toast(`Hello, ${user.first_name}`, {
        position: toast.POSITION.BUTTOM_RIGHT,
      });
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
    case "SIGN_OUT":
      localStorage.removeItem("token");
      toast("See You Soon...", {
        position: toast.POSITION.BOTTOM_RIGHT,
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
