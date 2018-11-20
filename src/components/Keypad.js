import React from 'react'

class Keypad extends React.Component {

  handlePassword = () => console.log('Entering password...')

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.handlePassword}/>
      </div>
    )
  }

} //end of class

export default Keypad
