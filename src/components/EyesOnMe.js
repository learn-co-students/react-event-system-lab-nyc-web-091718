// Code EyesOnMe Component Here
import React, { Component } from 'react';

class EyesOnMe extends Component {

  handleFocusClick = () => {
    console.log('Good!')
  }

  handleBlurClick = () => {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <button
        onFocus={this.handleFocusClick}
        onBlur={this.handleBlurClick}
      >
        EyesOnMe
      </button>
    )
  }

}

export default EyesOnMe;
