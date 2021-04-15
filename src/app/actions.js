import { SET_BREAKPOINT } from './constants';

export const setBreakpoint = (breakpoint) => ({
  type: SET_BREAKPOINT,
  payload: { breakpoint },
});
