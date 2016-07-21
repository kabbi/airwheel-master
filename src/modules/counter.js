import { createConstants, createReducer } from '../utils/Redux';

export const Path = 'counter';

export const InitialState = 0;

export const Constants = createConstants([
  'CounterIncrement',
  'CounterDecrement',
]);

export const selectors = {
  getValue: state => state[Path],
};

export const actions = {
  increment: (value = 1) => ({
    type: Constants.CounterIncrement,
    payload: value,
  }),
  decrement: (value = 1) => ({
    type: Constants.CounterDecrement,
    payload: value,
  }),
};

export const reducer = createReducer({
  [Constants.CounterIncrement]: (state, { payload: value }) => (
    state + value
  ),
  [Constants.CounterDecrement]: (state, { payload: value }) => (
    state - value
  ),
}, InitialState);

export default {
  Path,
  InitialState,
  Constants,
  selectors,
  actions,
  reducer,
};
