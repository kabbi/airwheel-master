import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';

import store from '../store';

const Root = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

Root.propTypes = {
  children: PropTypes.node,
};

export default Root;
