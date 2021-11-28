import axios from "axios";
import { toast } from "react-toastify";

/// Register user actions
export const signUp = (user) => {
  return (dispatch) => {
    axios
      .post(
        // "https://intense-anchorage-09653.herokuapp.com/v1/auth/register",
        "http://localhost:4100/v1/auth/register",
        user
      )
      .then((token) => {
        localStorage.setItem("token", token.data.data);

        dispatch({
          type: "SIGN_UP",
          token: token.data.data,
        });
      })
      .catch((error) => {
        console.log(error.response);
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

///Login User Actions
export const signIn = (email, password) => {
  return (dispatch) => {
    axios
      .post("https://intense-anchorage-09653.herokuapp.com/v1/auth/login", {
        email,
        password,
      })
      .then((token) => {
        localStorage.setItem("token", token.data);

        dispatch({
          type: "SIGN_IN",
          token: token.data,
        });
      })
      .catch((error) => {
        console.log(error.response);

        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

/// LogOut user action
export const signOut = () => {
  return (dispatch) => {
    dispatch({
      type: "SIGN_OUT",
    });
  };
};

export const loadUser = () => {
  return (dispatch, getState) => {
    const token = getState().auth.token;
    if (token) {
      dispatch({
        type: "USER_LOADED",
        token,
      });
    } else return null;
  };
};
