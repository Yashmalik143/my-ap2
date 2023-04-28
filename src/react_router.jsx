import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} 
from 'react-router-dom'
import home from './Nhome'
// Home component
const Home = (props) => <h1>Home</h1>
// About component
const About = (props) => <h1>About Us</h1>
// Contact component
const Contact = (props) => <h1>Contact us</h1>
// Challenge component
const Challenges = (props) => (
  <div>
    <h1> React challenge</h1>
  </div>
)
const NotFound = (props) => <h1>The page your looking for not found</h1>
class react_router extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>Contact</NavLink>
            </li>
            <li>
              <NavLink to='/challenges'>Challenges</NavLink>
            </li>          
          </ul>

          <Routes>
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/challenge' component={Challenges} />
            <Route path='/' component={Home} />
            <Route component={NotFound} />
          </Routes>
          
        </div>
      </Router>
    );
  };
};
export default react_router ;
