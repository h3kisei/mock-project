import * as types from "../constants/post";

const initialState = {
  data: [],
  total: 0,
  currentPage: 1,
  loading: false,
  error: null,
  keyword: "",
};

function orderReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_ORDER_START:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_ORDER_SUCCESS:
      // since action.payload is {data, total, currentPage}
      return {
        ...state,
        loading: false,
        ...action.payload,
      };
    case types.FETCH_ORDER_FAIL:
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

    case types.UPDATE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        order: action.payload,
      };
    case types.UPDATE_ORDER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.DELETE_ORDER:
      return {
        ...state,
        ...action.payload,
      };

    case types.GET_ORDER_BY_ID:
      const newOrder = action.payload;
      let newData = state.data.map((order) => {
        if (order.id === newOrder.id) {
          return newOrder;
        }
        return order;
      });
      if (newData.length === 0) {
        newData.push(newOrder);
      }
      return {
        ...state,
        loading: false,
        data: newData,
      };

    default:
      return state;
  }
}

export default orderReducer;
