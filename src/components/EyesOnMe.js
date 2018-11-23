// Code EyesOnMe Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class EyesOnMe extends React.Component {

  focusFriend = () => {
    console.log('Good!')
  }

  blurFriend = () => {
    console.log('Hey! Eyes on me!')
  }

  render(){
    return (
    <button onFocus={this.focusFriend} onBlur={this.blurFriend}></button>
   )

  }


} //end class
