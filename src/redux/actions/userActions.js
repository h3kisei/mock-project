import * as types from "../constants/post";
import axios from "axios";

const fetchUserStart = () => ({
  type: types.FETCH_USER_START,
});

const fetchUserSuccess = (users) => ({
  type: types.FETCH_USER_SUCCESS,
  payload: users,
});

const fetchUserFail = (error) => ({
  type: types.FETCH_USER_FAIL,
  payload: error,
});

const createUserFail = (error) => ({
  type: types.CREATE_USER_FAIL,
  payload: error,
});

const createUserSuccess = (users) => ({
  type: types.CREATE_USER_SUCCESS,
  payload: users,
});

export const setCurrentPage = (page) => ({
  type: types.SET_CURRENT_PAGE,
  payload: page,
});

export function fetchUsers({ page = 1, size = 10 }) {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user.tokens.access.token);
  return function (dispatch) {
    dispatch(fetchUserStart());
    axios
      .get(
        `http://139.59.103.50:5000/v1/users?role=admin&page=${page}&size=${size}`,
        {
          headers: {
            Authorization: `Bearer ${user.tokens.access.token}`,
          },
        }
      )
      .then((response) => {
        const { data } = response.data || {};
        const users = {
          data: data.result,
          total: data.total,
          currentPage: data.currentPage,
        };
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUserFail(error.message));
      });
  };
}

export function createUser({ username, email, password, role }) {
  const user = JSON.parse(localStorage.getItem("user"));
  return function (dispatch) {
    axios
      .post(
        `http://139.59.103.50:5000/v1/users`,
        { username, email, password, role },
        {
          headers: {
            Authorization: `Bearer ${user.tokens.access.token}`,
          },
        }
      )
      .then((response) => {
        const { data } = response.data || {};
        const users = {
          data: data.products.result,
        };
        dispatch(createUserSuccess(users));
      })
      .catch((error) => {
        dispatch(createUserFail(error.message));
      });
  };
}
