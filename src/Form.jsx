import React, { Component } from 'react'
import ReactDOM from 'react-dom'
class App extends Component {
  // declaring initial state
  state = {
    firstName: '',
    lastName: '',
    country: '',
    title: '',
  }
  handleChange = (e) => {


    const { name, value } = e.target

    this.setState({ [name]: value })
  }
  handleSubmit = (e) => {

    e.preventDefault()

    console.log(this.state)
  }

  render() {
   
    const { firstName, lastName, title, country } = this.state
    return (
      <div className='App'>
        <h3>Add Student</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type='text'
              name='firstName'
              placeholder='First Name'
              value={firstName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type='text'
              name='lastName'
              placeholder='Last Name'
              value={lastName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type='text'
              name='country'
              placeholder='Country'
              value={country}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type='text'
              name='title'
              placeholder='Title'
              value={title}
              onChange={this.handleChange}
            />
          </div>

          <button className='btn btn-success'>Submit</button>
        </form>
        <h1>{this.state.firstName}</h1>
        <h1>{this.state.lastName}</h1>
        <h1>{this.state.country}</h1>
        <h1>{this.state.title}</h1>
      </div>
    )
  }
}
export default App