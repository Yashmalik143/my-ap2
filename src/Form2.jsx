import { Component } from "react";

class Form2 extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      nameError :"",
      passError :""
    };
  }
  valid = () =>{

    if(!this.state.name.includes("a") && this.state.password.length < 5)
    {
        this.setState({nameError:"Invalid Name "})
        this.setState({passError:"Password Length is less Than 5"})
    }
    else if(this.state.password.length< 5)
    {
        this.setState({passError:"Password Length is less Than 5"})
    }
    else if(!this.state.name.includes("a"))
    {
        this.setState({nameError:"Invalid Name "})

    }
    else{
        return true;
    }
   
  }

Submit = () =>{
    this.setState({
        nameError:"",
        passError:"",
     
    })
  if(this.valid())
  {

    alert("Submited")
  }
}
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <input type="text" placeholder="Name" onChange={(e) =>{this.setState({name:e.target.value})}}></input>
        <p style={{color:"red" , fontSize:"14px"}}>{this.state.nameError}</p><br />
        <input type="password" placeholder="Password" onChange={(e) =>{this.setState({password:e.target.value})}}></input><br />
        <button onClick={() => this.Submit()}>Submit</button>
        <h2>{this.state.name}</h2>
      </div>
    );
  }
}

export default Form2;
