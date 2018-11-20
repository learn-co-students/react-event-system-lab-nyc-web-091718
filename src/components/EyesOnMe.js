import React, { Component } from 'react';

export default class EyesOnMe extends Component {
  constructor(props) {
    super(props);
  }

  handleFocus = (event) => {
    console.log("Good!");
    // debugger
  }

  handleBlur = (event) => {
    console.log("Hey! Eyes on me!");
    // debugger
  }


  render() {
    return(
      <button
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}/>
    )
  }
}
