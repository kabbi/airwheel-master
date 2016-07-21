import { createConstants, createReducer } from '../utils/Redux';

export const path = 'counter';

export const initialState = 0;

export const selectors = {
  getValue: state => state[path],
};

export const constants = createConstants([
  'COUNTER_INCREMENT',
  'COUNTER_DECREMENT',
]);

export const actions = {
  increment: (value = 1) => ({
    type: constants.COUNTER_INCREMENT,
    payload: value,
  }),
  decrement: (value = 1) => ({
    type: constants.COUNTER_DECREMENT,
    payload: value,
  }),
};

export const reducer = createReducer({
  [constants.COUNTER_INCREMENT]: (state, { payload: value }) => (
    state + value
  ),
  [constants.COUNTER_DECREMENT]: (state, { payload: value }) => (
    state - value
  ),
}, initialState);

export default {
  path,
  initialState,
  selectors,
  actions,
  reducer,
};
