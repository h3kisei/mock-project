import * as types from "../constants/post";
import axios from "axios";

const fetchProductStart = () => ({
  type: types.FETCH_PRODUCT_START,
});

const fetchProductSuccess = (products) => ({
  type: types.FETCH_PRODUCT_SUCCESS,
  payload: products,
});

const fetchProductFail = (error) => ({
  type: types.FETCH_PRODUCT_FAIL,
  payload: error,
});

export const setCurrentPage = (page) => ({
  type: types.SET_CURRENT_PAGE,
  payload: page,
});

const searchProducts = (products) => ({
  type: types.SEARCH_PRODUCTS,
  payload: products,
});

export const setKeyword = (keyword) => ({
  type: types.SET_KEYWORD,
  payload: keyword,
});

export function searchListProducts({ keyword, page = 1, size = 10 }) {
  return function (dispatch) {
    axios
      .get(
        `http://139.59.103.50:5000/v1/search?keyword=${keyword}&page=${page}&size=${size}`
      )
      .then((response) => {
        const { data } = response.data || {};
        const products = {
          data: data.products.result,
          total: data.products.total,
          currentPage: data.products.currentPage,
        };
        dispatch(searchProducts(products));
      })
      .catch((error) => {
        dispatch(fetchProductFail(error.message));
      });
  };
}

export function fetchProducts({ page = 1, size = 10 }) {
  return function (dispatch) {
    dispatch(fetchProductStart());
    axios
      .get(`http://139.59.103.50:5000/v1/products?page=${page}&size=${size}`)
      .then((response) => {
        const { data } = response.data || {};
        const products = {
          data: data.result,
          total: data.total,
          currentPage: data.currentPage,
        };
        dispatch(fetchProductSuccess(products));
      })
      .catch((error) => {
        dispatch(fetchProductFail(error.message));
      });
  };
}
