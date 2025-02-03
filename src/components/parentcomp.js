import React, { Component } from 'react';
import PureComp from './purecomp';
import RegularComp from './regularcomp';

export class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'rahul'
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'rahul'
             });
        }, 3000);
    }
    

  render() {
    console.log('parent comp render');
    
    return (
      <div>This is a ParentComp
        <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;