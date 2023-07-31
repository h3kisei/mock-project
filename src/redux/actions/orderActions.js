import * as types from "../constants/post";
import axios from "axios";

const fetchOrderStart = () => ({
  type: types.FETCH_ORDER_START,
});

const fetchOrderSuccess = (orders) => ({
  type: types.FETCH_ORDER_SUCCESS,
  payload: orders,
});

const fetchOrderFail = (error) => ({
  type: types.FETCH_ORDER_FAIL,
  payload: error,
});

export const setCurrentPage = (page) => ({
  type: types.SET_CURRENT_PAGE,
  payload: page,
});

export function fetchOrders({ page = 1, size = 10 }) {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user.tokens.access.token);
  return function (dispatch) {
    dispatch(fetchOrderStart());
    axios
      .get(`http://139.59.103.50:5000/v1/orders?page=${page}&size=${size}`, {
        headers: {
          Authorization: `Bearer ${user.tokens.access.token}`,
        },
      })
      .then((response) => {
        const { data } = response.data || {};
        const orders = {
          data: data.orders.result,
          total: data.orders.total,
          currentPage: data.orders.currentPage,
        };
        dispatch(fetchOrderSuccess(orders));
      })
      .catch((error) => {
        dispatch(fetchOrderFail(error.message));
      });
  };
}
