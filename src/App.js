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
   
    <>
      <MyClass />
     <Form />
     <Form2 />
     <Hoc/>
     <ApiCall/>
     <PostAPi/>
     <Toggle/>
     <form_hooks/>
     <Ref/>
     <Memo/>
    </>
  );
}

export default App;
