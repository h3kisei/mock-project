import * as types from "../constants/post";

const initialState = {
  data: [],
  total: 0,
  currentPage: 1,
  loading: false,
  error: null,
  keyword: "",
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_USER_START:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        ...action.payload,
      };
    case types.FETCH_USER_FAIL:
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

    case types.CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case types.CREATE_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}

export default userReducer;
