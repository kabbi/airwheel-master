import { createConstants, createReducer } from '../utils/Redux';

export const path = 'logs';

export const initialState = {
  history: [],
};

export const selectors = {
  getState: state => state[path],
  getHistory: state => selectors.getState(state).history,
};

export const constants = createConstants([
  'LOGS_APPEND',
  'LOGS_CLEAR_HISTORY',
]);

export const actions = {
  append: (level, message) => ({
    type: constants.LOGS_APPEND,
    payload: { level, message },
  }),
  clearHistory: () => ({
    type: constants.LOGS_CLEAR_HISTORY,
  }),
};

export const reducer = createReducer({
  [constants.LOGS_APPEND]: (state, { payload }) => ({
    ...state,
    history: [
      ...history,
      payload,
    ],
  }),
  [constants.LOGS_CLEAR_HISTORY]: state => ({
    ...state,
    history: [],
  }),
}, initialState);

export default {
  path,
  initialState,
  selectors,
  actions,
  reducer,
};
