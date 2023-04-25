
import { render } from '@testing-library/react'
import React, { Component } from 'react'
class MyClass extends Component{
    state = {
        message: 'Welcome',
    }
    handleClick = (e) => {
        // e gives an event object
        // check the value of e using console.log(e)
        this.setState({
          message: 'Welcome to the world of events',
        })
        console.log(this.state.message)
      }
render()
{
return(
    <div>

        <h1>Hello{this.state.firstName}</h1>
        
        <button onClick={this.handleClick}>Click Me{this.state.message == "Welcome" ? "hello " :"bye"}</button>
    </div>
  
)}
}
export default MyClass