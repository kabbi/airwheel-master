export const createConstants = constants => (
  constants.reduce((result, constant) => {
    result[constant] = constant;
    return result;
  }, {})
);

export const createReducer = (handlers, initialState) => (
  (state = initialState, action) => {
    const reducer = handlers[action.type];
    return reducer ? reducer(state, action) : state;
  }
);
