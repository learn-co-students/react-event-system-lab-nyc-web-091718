import React from 'react'

export default function KeyPad(props) {
  let handleKeyUp = (event) => {
    console.log('Entering password...')
  }

  return (
    <div>
      <input type='password' onKeyUp={handleKeyUp}/>
    </div>
  )
}
