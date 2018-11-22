// Code EyesOnMe Component Here
import React from 'react';
import ReactDOM from 'react-dom';

const handleFocus = () => console.log('Good!')

const handleBlur = () => console.log('Hey! Eyes on me!')

function EyesOnMe() {
  return <button onFocus={handleFocus} onBlur={handleBlur}></button>
}

export default EyesOnMe;
