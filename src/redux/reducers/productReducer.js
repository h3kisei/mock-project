import * as types from "../constants/post";

const initialState = {
  data: [],
  total: 0,
  currentPage: 1,
  loading: false,
  error: null,
  keyword: "",
  image: [],
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_PRODUCT_START:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        ...action.payload,
      };

    case types.GET_PRODUCT_BY_ID:
      const newProduct = action.payload;
      let newData = state.data.map((product) => {
        if (product.id === newProduct.id) {
          return newProduct;
        }
        return product;
      });
      if (newData.length === 0) {
        newData.push(newProduct);
      }
      return {
        ...state,
        loading: false,
        data: newData,
      };
      
    case types.FETCH_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
      
    case types.CREATE_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    case types.UPDATE_PRODUCT_FAIL:
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

    case types.DELETE_PRODUCT:
      return {
        ...state,
        ...action.payload,
      };

    case types.UPLOAD_IMAGE:
      return {
        ...state,
        image: action.payload,
      };

    case types.UPLOAD_IMAGE_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default productReducer;
