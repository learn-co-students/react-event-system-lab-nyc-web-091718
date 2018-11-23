// const Keypad = () => {
//
// }
import React from 'react';
import ReactDOM from 'react-dom';

export default class Keypad extends React.Component {

  printPassword = () => {
    console.log('Entering password...');
  }

  render() {
    return (
      <input onKeyUp={this.printPassword} type="password"></input>
    );
  }
}
