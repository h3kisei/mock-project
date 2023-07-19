import { combineReducers } from 'redux';
import postReducer from './postReducer';

const rootReducer = combineReducers({
	data: postReducer,
});

export default rootReducer;