import React from 'react';

import Spinner from '../components/Spinner';

const stylesheet = {
  fullscreen: {
    width: '100%',
    height: '100%',
    layout: 'inline',
  },
  box: {
    // width: 100,
    border: {
      type: 'line',
    },
    style: {
      fg: 'black',
      border: {
        fg: 'blue',
      },
    },
  },
  spinner: {
    width: 10,
  },
};

export const TestView = () => (
  <layout class={stylesheet.fullscreen}>
    <box label="Whee" class={stylesheet.box}>
      123
    </box>
    <Spinner
      label="Loading"
      class={[
        stylesheet.box,
        stylesheet.spinner,
      ]}
    />
  </layout>
);

export default TestView;
