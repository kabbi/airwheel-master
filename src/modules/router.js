import { createConstants, createReducer } from '../utils/Redux';

export const Path = 'router';

export const InitialState = {
  currentPath: 'root',
};

export const Constants = createConstants([
  'RouterGo',
]);

export const selectors = {
  getState: state => state[Path],
  getCurrentPath: state => selectors.getState(state).currentPath,
};

export const actions = {
  go: path => ({
    type: Constants.RouterGo,
    payload: path,
  }),
};

export const reducer = createReducer({
  [Constants.RouterGo]: (state, { payload: path }) => ({
    ...state,
    currentPath: path,
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
