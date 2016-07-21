import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import CommonStyles from '../utils/CommonStyles';
import { actions, selectors } from '../modules/counter';

import Button from '../components/Button';

const mapStateToProps = state => ({
  counter: selectors.getValue(state),
});
const mapDispatchToProps = {
  onIncrement: actions.increment,
  onDecrement: actions.decrement,
};

const Styles = {
  box: {
    width: '100%',
    border: {
      type: 'line',
    },
  },
};

const CounterView = ({ counter, onIncrement, onDecrement }) => (
  <form class={CommonStyles.fullscreen}>
    <layout class={CommonStyles.fullscreen}>
      <box class={Styles.box} label="Counter">
        Current value: {`${counter}`}
      </box>
      <Button onPress={onIncrement}>
        Add one more
      </Button>
      <Button onPress={onDecrement}>
        Make one less
      </Button>
    </layout>
  </form>
);

CounterView.propTypes = {
  counter: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterView);
