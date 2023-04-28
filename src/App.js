import logo from './logo.svg';
import './App.css';
import MyClass from './Class';
import Form  from './Form';
import Form2 from './Form2';
import Hoc from './Hoc';
import react_router from './react_router';
// router
import { ReactDOM } from 'react';
import { BrowserRouter as Router ,Route,Link,Routes} from 'react-router-dom';

// previous
function App() {
  return (
   
    <div className="App">
       <Router>
        <ul>
          <li><Link to="/Class">Home</Link></li>
          <li><Link to="/Form">Form</Link></li>
          <li><Link to="/Form2">Form2</Link></li>
        </ul>
        <Routes>
        <Route path='/Class'  Component={MyClass}  />
        <Route path='/Form'  Component={Form}  />
        <Route path='/Form2'  Component={Form2}  />
        </Routes>
        </Router>
      
    </div>
  );
}

export default App;
