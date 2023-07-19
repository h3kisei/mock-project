import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import logger from "redux-logger";

const middleware = [thunk];

if (process.env.NODE_ENV !== "development") {
  middleware.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleware));
