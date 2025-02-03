import React, { Component } from 'react';

export class classprop extends Component {
  render() {
    return (
      <div>
        <h1> how are {this.props.name} you {this.props.place}</h1>
        <p>{this.props.chidren}</p>
      </div>
    );
  }
}

export default classprop;
