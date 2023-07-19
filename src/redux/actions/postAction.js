import * as types from "../constants/post";
import axios from "axios";

const fetchPostStart = () => ({
  type: types.FETCH_POST_START,
});

const fetchPostSuccess = (posts) => ({
  type: types.FETCH_POST_SUCCESS,
  payload: posts,
});

const fetchPostFail = (error) => ({
  type: types.FETCH_POST_FAIL,
  payload: error,
});

export function fetchPosts() {
  return function (dispatch) {
    dispatch(fetchPostStart());
    axios
      .get("http://139.59.103.50:5000/v1/products")
      .then((response) => {
        const posts = response.data;
        dispatch(fetchPostSuccess(posts));
      })
      .catch((error) => {
        dispatch(fetchPostFail(error.message));
      });
  };
}
