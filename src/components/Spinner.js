import React, { Component } from 'react';

const SpinnerChars = '▀▐▄▌';

export class Spinner extends Component {
  state = {
    phase: 0,
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      const phase = (this.state.phase + 1) % SpinnerChars.length;
      this.setState({ phase });
    }, 300);
  }

  render() {
    const { phase } = this.state;
    return (
      <bigtext {...this.props}>
        {SpinnerChars[phase] || '-'}
      </bigtext>
    );
  }
}

export default Spinner;
