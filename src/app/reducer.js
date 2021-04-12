import { combineReducers } from 'redux';

const initialState = {
  deviceType: 'mobile',
};

const appReducer = (state = initialState) => {
  return state;
};
const reducers = {
  app: appReducer,
};

export const rootReducer = combineReducers(reducers);
