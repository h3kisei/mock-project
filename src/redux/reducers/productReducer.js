import * as types from "../constants/post";

const initialState = {
  data: [],
  total: 0,
  currentPage: 1,
  loading: false,
  error: null,
  keyword: "",
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_PRODUCT_START:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_PRODUCT_SUCCESS:
      // since action.payload is {data, total, currentPage}
      return {
        ...state,
        loading: false,
        ...action.payload,
      };
    case types.FETCH_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case types.SEARCH_PRODUCTS:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };

    case types.SET_KEYWORD:
      return {
        ...state,
        keyword: action.payload,
      };
    default:
      return state;
  }
}

export default productReducer;
