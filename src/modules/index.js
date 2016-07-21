import counter from './counter';

export const modules = [
  counter,
];

export const initialState = {};

export const rootReducer = (state = initialState, action) => {
  const nextState = {};
  let hasChanged = false;
  for (const { path, reducer: moduleReducer } of modules) {
    const previousStateForPath = state[path];
    const nextStateForPath = moduleReducer(previousStateForPath, action);
    hasChanged = hasChanged || nextStateForPath !== previousStateForPath;
    nextState[path] = nextStateForPath;
  }
  return hasChanged ? nextState : state;
};
