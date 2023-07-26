import * as types from "../constants/post";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

export default function (state = initialState, action) {
  switch (action.type) {
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    case types.REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case types.LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case types.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
}
