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

    case types.UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case types.UPDATE_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.DELETE_USER:
      return {
        ...state,
        ...action.payload,
      };

    case types.GET_USER_BY_ID:
      const newUser = action.payload;
      let newData = state.data.map((user) => {
        if (user.id === newUser.id) {
          return newUser;
        }
        return user;
      });
      if (newData.length === 0) {
        newData.push(newUser);
      }
      return {
        ...state,
        loading: false,
        data: newData,
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
