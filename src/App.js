import logo from './logo.svg';
import './App.css';
import MyClass from './Class';
import Form  from './Form';
import Form2 from './Form2';
import Hoc from './Hoc';
import ApiCall from './PostApi';
import PostAPi from './ApiCall';
import { useState } from 'react';
function App() {

  return (
   
    <div className="App">
      <MyClass />
     <Form />
     <Form2 />
     <Hoc/>
     <ApiCall/>
     <PostAPi/>
    </div>
  );
}

export default App;
