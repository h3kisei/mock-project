import * as types from "../constants/post";
import axios from "axios";

const registerSuccess = () => ({
  type: types.REGISTER_SUCCESS,
});

const registerFail = (error) => ({
  type: types.REGISTER_FAIL,
  payload: error,
});

const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

const loginFail = (error) => ({
  type: types.LOGIN_FAIL,
  payload: error,
});

const logout = () => ({
  type: types.LOGOUT,
});

const setMessage = (message) => ({
  type: types.SET_MESSAGE,
  payload: message,
});

export function register(username, email, password) {
  return function (dispatch) {
    axios
      .post("http://139.59.103.50:5000/v1/auth/" + "register", {
        username,
        email,
        password,
      })
      .then((response) => {
        dispatch(registerSuccess());
        dispatch(setMessage(response.data.message));
        return Promise.resolve();
      })
      .catch((error) => {
        dispatch(registerFail(error.message));
      });

    return Promise.reject();
  };
}

export function login(email, password) {
  return function (dispatch) {
    axios
      .post("http://139.59.103.50:5000/v1/auth/" + "login", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
          dispatch(loginSuccess());
        }

        return response.data;
      })
      .catch((error) => {
        dispatch(loginFail(error.message));
      });
  };
}

export function logOut() {
  return function (dispatch) {
    axios.post("http://139.59.103.50:5000/v1/auth/logout").then(() => {
      localStorage.removeItem("user");
      dispatch(logout());
    });
  };
}
