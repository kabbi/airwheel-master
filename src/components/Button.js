import React, { PropTypes } from 'react';

const Styles = {
  button: {
    mouse: true,
    keys: true,
    width: '50%',
    border: {
      type: 'line',
    },
    style: {
      hover: {
        border: {
          fg: 'red',
        },
      },
      focus: {
        border: {
          fg: 'blue',
        },
      },
    },
  },
};

const Button = ({ children, class: style, ...props }) => (
  <button {...props} class={[Styles.button, style]}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  class: PropTypes.object,
};

export default Button;
