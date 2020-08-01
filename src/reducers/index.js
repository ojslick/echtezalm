import { combineReducers } from 'redux';
import inputReducer from './inputReducer';

import isLoggedInReducer from './isLoggedInReducer';

export default combineReducers({ inputReducer, isLoggedIn: isLoggedInReducer });
