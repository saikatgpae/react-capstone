import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
// eslint-disable-next-line import/no-named-as-default
import dataReducer from './Home/cvReducerRedux';

const rootReducer = combineReducers({
  dataReducer,
});

const Store = configureStore({
  reducer: rootReducer,
});

export default Store;
