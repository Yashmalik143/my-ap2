import React, { Component } from 'react'

export default class ApiCall extends Component {
    constructor(){
        super()
        this.state = {
            users:[]
        }
    }

    fetchURL = () => {
      fetch("http://lagimoj-001-site1.dtempurl.com/api/Users/get-all-users")
    .then(d=> d.json())
    .then(res => 
        {
         
       
            this.setState({
                users : res
              })
   
        })

        console.log(this.state.users)
      }

  

  render() {
    return (
      <div>
        <h1>Api</h1>
        <button onClick={() =>this.fetchURL()}>Call</button>
      </div>
    )
  }
}
