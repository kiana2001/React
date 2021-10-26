import React from "react";
import User from "./User"
import "./App.css";

class  App extends React.Component{
  constructor(){
    super();
    this.state = {
speed:250,
model:"benz",
number : 0
    }
  }
  changeHandler =  () =>{
    this.setState({
      speed: 700,
      model : "bmw"
    })
  }
  Upone = () => {
    this.setState(
      {
        number:this.state.number+1
      }
    )
  }
    render(){
    return (
       
        <div className = "container">
          <h1 style = {{color:"red" , fontSize : "1rem"}}> kiana</h1>
         <h1>{this.state.number}</h1>
         <h1 className = "header  ">bala</h1>
      <User name= "kianakermani"/>
          <p>my first car is{this.state.model} and its {this.state.speed} </p>
         <button onClick = {this.changeHandler}>change</button>
         <button onClick ={this.Upone}>up</button>
         </div>
         
    )
       
    }
}

//const Hi = () =>{
    //return (
        
    //)
//}
export default App ;