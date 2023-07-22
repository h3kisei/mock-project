import { combineReducers } from "redux";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
  products: postReducer,
});

export default rootReducer;
