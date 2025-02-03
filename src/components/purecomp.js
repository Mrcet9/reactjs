import React, { Component } from 'react';

export class purecomp extends Component {
  render() {
    console.log(('pure comp render'));
    
    return (
      <div>this is rahul {this.props.name}</div>
    );
  }
}

export default purecomp;
