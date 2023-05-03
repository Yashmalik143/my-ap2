import logo from './logo.svg';
import './App.css';
import MyClass from './Class';
import Form  from './Form';
import Form2 from './Form2';
import Hoc from './Hoc';
import ApiCall from './PostApi';
import PostAPi from './ApiCall';
import { useState } from 'react';
import Toggle from './ToggleImage';
import form_hooks from './form_using_hooks';
import Ref from './useRef';
import Memo from './useMemo';
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
