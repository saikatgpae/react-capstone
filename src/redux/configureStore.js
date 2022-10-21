import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
// eslint-disable-next-line import/no-named-as-default
import dataReducer from './Home/cvReducerRedux';
// import districtDataReducer from './stateWiseData/eachStateRedux';

const rootReducer = combineReducers({
  dataReducer,
  // districtDataReducer,
});

const Store = configureStore({
  reducer: rootReducer,
});

export default Store;
