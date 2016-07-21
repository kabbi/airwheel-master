import counter from './counter';

export const modules = [
  counter,
];

export const InitialState = {};

export const rootReducer = (state = InitialState, action) => {
  const nextState = {};
  let hasChanged = false;
  for (const { Path, reducer: moduleReducer } of modules) {
    const previousStateForPath = state[Path];
    const nextStateForPath = moduleReducer(previousStateForPath, action);
    hasChanged = hasChanged || nextStateForPath !== previousStateForPath;
    nextState[Path] = nextStateForPath;
  }
  return hasChanged ? nextState : state;
};
