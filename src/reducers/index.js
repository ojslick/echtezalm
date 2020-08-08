import { combineReducers } from 'redux';
import inputReducer from './inputReducer';
import updateLoginReducer from './updateLoginReducer';
import productReducer from './productReducer';

import isLoggedInReducer from './isLoggedInReducer';

export default combineReducers({
  inputReducer,
  isLoggedIn: isLoggedInReducer,
  updateLogin: updateLoginReducer,
  product: productReducer,
});
