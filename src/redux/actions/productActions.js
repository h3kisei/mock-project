import * as types from "../constants/post";
import axios from "axios";

const fetchProductStart = () => ({
  type: types.FETCH_PRODUCT_START,
});

const fetchProductSuccess = (products) => ({
  type: types.FETCH_PRODUCT_SUCCESS,
  payload: products,
});

const createProductFail = (error) => ({
  type: types.CREATE_PRODUCT_FAIL,
  payload: error,
});

const createProductSuccess = (product) => ({
  type: types.CREATE_PRODUCT_SUCCESS,
  payload: product,
});

const fetchProductFail = (error) => ({
  type: types.FETCH_PRODUCT_FAIL,
  payload: error,
});

const getProduct = (product) => ({
  type: types.GET_PRODUCT,
  payload: product,
});

const uploadImage = (image) => ({
  type: types.UPLOAD_IMAGE,
  payload: image,
});
const uploadImageFail = (error) => ({
  type: types.UPLOAD_IMAGE_FAIL,
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

const deleteProduct = () => ({
  type: types.DELETE_PRODUCT,
});

export const setKeyword = (keyword) => ({
  type: types.SET_KEYWORD,
  payload: keyword,
});

export function deleteProductByID(productId) {
  const user = JSON.parse(localStorage.getItem("user"));
  return function (dispatch) {
    axios
      .delete(`http://139.59.103.50:5000/v1/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${user.tokens.access.token}`,
        },
      })
      .then((response) => {
        dispatch(deleteProduct());
      });
  };
}

export function uploadImages({ imageUrl }) {
  const user = JSON.parse(localStorage.getItem("user"));
  return function (dispatch) {
    axios
      .post(
        `http://139.59.103.50:5000/v1/uploads`,
        { imageUrl },
        {
          headers: {
            Authorization: `Bearer ${user.tokens.access.token}`,
          },
        }
      )
      .then((response) => {
        const image = {
          data: response.data,
        };
        dispatch(uploadImage(image));
      })
      .catch((error) => {
        dispatch(uploadImageFail(error.response.data));
      });
  };
}

export function createProduct({
  name,
  description,
  countInStock,
  brand,
  price,
  imageUrls,
  category,
}) {
  const user = JSON.parse(localStorage.getItem("user"));
  return function (dispatch) {
    axios
      .post(
        `http://139.59.103.50:5000/v1/products`,
        { name, description, countInStock, brand, price, category, imageUrls },
        {
          headers: {
            Authorization: `Bearer ${user.tokens.access.token}`,
          },
        }
      )
      .then((response) => {
        const { data } = response.data || {};
        const product = {
          data: data.products.result,
        };
        dispatch(createProductSuccess(product));
      })
      .catch((error) => {
        dispatch(createProductFail(error.message));
      });
  };
}

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

export function fetchProductById(id) {
  return function (dispatch) {
    dispatch(fetchProductStart());
    axios
      .get(`http://139.59.103.50:5000/v1/products?id={id}`)
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
