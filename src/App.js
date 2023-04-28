import logo from './logo.svg';
import './App.css';
import MyClass from './Class';
import Form  from './Form';
import Form2 from './Form2';
import Hoc from './Hoc';
import ApiCall from './ApiCall';
function App() {
  return (
    <div className="App">
      <MyClass />
     <Form />
     <Form2 />
     <Hoc/>
     <ApiCall />
    </div>
  );
}

export default App;
