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

export function register(data) {
  return function (dispatch) {
    axios
      .post(`http://139.59.103.50:5000/v1/auth/register`, data)
      .then(() => {
        dispatch(registerSuccess());
      })
      .catch((error) => {
        dispatch(registerFail(error.message));
      });
  };
}

export function login(data) {
  return function (dispatch) {
    axios
      .post(`http://139.59.103.50:5000/v1/auth/login`, data)
      .then(({ data }) => {
        if (data.status === 200) {
          localStorage.setItem("user", JSON.stringify(data.data));
          dispatch(loginSuccess());
        }
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
