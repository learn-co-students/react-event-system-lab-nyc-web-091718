// Code Keypad Component Here
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const handleKey = () => console.log('Entering password...')

function Keypad() {
  return <input type="password" onKeyUp={handleKey}/>
}

export default Keypad;
