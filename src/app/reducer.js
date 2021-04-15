import { combineReducers } from 'redux';

import { SET_BREAKPOINT } from './constants';

const initialState = {
  breakpoint: 'sm',
};

const appReducer = (state = initialState, action) => {
  const { type, payload } = action;
  return type === SET_BREAKPOINT
    ? {
        ...state,
        breakpoint: payload.breakpoint,
      }
    : state;
};
const reducers = {
  app: appReducer,
};

export const rootReducer = combineReducers(reducers);
