import React, { Component } from 'react';
import HighOrder from './highorder';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  IncrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <button onMouseEnter={this.IncrementCount}>
          {this.props.name} incremented {count} times
        </button>
      </div>
    );
  }
}

// Wrap Counter with HighOrder and export
export default HighOrder(Counter);
