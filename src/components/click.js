import React, { Component } from 'react';
import UpdatedComponent from './highorder'; // Make sure the exported name from highorder.js matches

export class Click extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  // Renamed method to updateClick for clarity and consistency.
  updateClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        {/* Use the correct method name in the event handler */}
        <button onMouseEnter={this.updateClick}>
          {this.props.name} incremented {count} times
        </button>
      </div>
    );
  }
}

// Wrap the Click component with the Higher-Order Component
export default UpdatedComponent(Click);
