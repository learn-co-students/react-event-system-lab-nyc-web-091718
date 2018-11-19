// Code EyesOnMe Component Here
import React from 'react'


export default function EyesOnMe(props) {
  let handleFocus = (event) => {
    console.log('Good!')
  }

  let handleBlur = (event) => {
    console.log('Hey! Eyes on me!')
  }
  return (
    <div>
      <button onFocus={handleFocus} onBlur={handleBlur}>pushme</button>
    </div>
  )
}
