import React, { Component } from 'react';

export class regularcomp extends Component {
  render() {
    console.log(('reguar comp render'));
    
    return (
      <div>this is regularcomp {this.props.name}</div>
    );
  }
}

export default regularcomp;
