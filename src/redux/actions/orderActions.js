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

const updateOrderFail = (error) => ({
  type: types.UPDATE_ORDER_FAIL,
  payload: error,
});

const updateOrderSuccess = (order) => ({
  type: types.UPDATE_ORDER_SUCCESS,
  payload: order,
});

const setOrder = (order) => ({
  type: types.GET_ORDER_BY_ID,
  payload: order,
});

const deleteOrder = () => ({
  type: types.DELETE_ORDER,
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

export function getOrderById(orderId) {
  const user = JSON.parse(localStorage.getItem("user"));
  return function (dispatch) {
    axios
      .get(`http://139.59.103.50:5000/v1/orders/${orderId}`, {
        headers: {
          Authorization: `Bearer ${user.tokens.access.token}`,
        },
      })
      .then((response) => {
        const { data } = response.data || {};
        dispatch(setOrder(data.order));
      });
  };
}

export function updateOrderById({ isPaid, status, orderId }) {
  var order = {
    isPaid,
    status,
  };
  const keys = Object.keys(order);
  keys.forEach((key) => {
    if (!order[key]) {
      delete order[key];
    }
  });

  const user = JSON.parse(localStorage.getItem("user"));
  return function (dispatch) {
    axios
      .patch(`http://139.59.103.50:5000/v1/orders/${orderId}`, order, {
        headers: {
          Authorization: `Bearer ${user.tokens.access.token}`,
        },
      })
      .then((response) => {
        const { data } = response.data || {};
        dispatch(updateOrderSuccess(data.order));
      })
      .catch((error) => {
        dispatch(updateOrderFail(error.message));
      });
  };
}

export function deleteOrderByID(orderId) {
  const user = JSON.parse(localStorage.getItem("user"));
  return function (dispatch) {
    axios
      .delete(`http://139.59.103.50:5000/v1/orders/${orderId}`, {
        headers: {
          Authorization: `Bearer ${user.tokens.access.token}`,
        },
      })
      .then((response) => {
        dispatch(deleteOrder());
      });
  };
}
