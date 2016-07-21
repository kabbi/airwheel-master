import { createConstants, createReducer } from '../utils/Redux';

export const Path = 'logs';

export const InitialState = {
  history: [],
};

export const Constants = createConstants([
  'LogsAppend',
  'LogsClearHistory',
]);

export const selectors = {
  getState: state => state[Path],
  getHistory: state => selectors.getState(state).history,
};

export const actions = {
  append: (level, message) => ({
    type: Constants.LogsAppend,
    payload: { level, message },
  }),
  clearHistory: () => ({
    type: Constants.LogsClearHistory,
  }),
};

export const reducer = createReducer({
  [Constants.LogsAppend]: (state, { payload }) => ({
    ...state,
    history: [
      ...history,
      payload,
    ],
  }),
  [Constants.LogsClearHistory]: state => ({
    ...state,
    history: [],
  }),
}, InitialState);

export default {
  Path,
  InitialState,
  Constants,
  selectors,
  actions,
  reducer,
};
