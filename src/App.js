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
import { Fname } from './ToggleImage';
function App() {
  const s = Fname;
  console.log(s)
  return (
   
    <div className="App">
      <MyClass />
     <Form />
     <Form2 />
     <Hoc/>
     <ApiCall/>
     <PostAPi/>
     <Toggle/>
    </div>
  );
}

export default App;
