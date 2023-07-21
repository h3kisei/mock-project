import * as types from "../constants/post";
import axios from "axios";

const fetchPostStart = () => ({
  type: types.FETCH_POST_START,
});

const fetchPostSuccess = (products) => ({
  type: types.FETCH_POST_SUCCESS,
  payload: products,
});

const fetchPostFail = (error) => ({
  type: types.FETCH_POST_FAIL,
  payload: error,
});

export function fetchProducts() {
  return function (dispatch) {
    dispatch(fetchPostStart());
    axios
      .get(
        "http://139.59.103.50:5000/v1/products"
        //   {
        //       headers: {
        //           "Authorization": `Bearer ${}`
        //       }
        //   }
      )
      .then((response) => {
        const products = response.data.data.result;
        dispatch(fetchPostSuccess(products));
      })
      .catch((error) => {
        dispatch(fetchPostFail(error.message));
      });
  };
}

export const searchProducts = (query) => (dispatch, getState) => {
  console.log(query);
  const { postReducer } = getState();
  const searchResults = postReducer().searchResults.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );
  console.log(searchResults);
  dispatch({ type: types.SEARCH_POSTS, payload: searchResults });
};
