import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './css/bootstrap.css'
import Person from './public/person'
class  App extends Component {
  //state is used to change the component, well, state from within. 
  //Changes to state also trigger an UI update.
  state={
    persons:[{name:'rishabh',age:29}
  ]
  }
 btnHandler=()=>{
   console.log('hello rishabh sharma')
 }
  render(){
  return (
    // <div className="App">
/*   
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p class="text-dark">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
    
      <div class="container text-center">
    <button id="add-btn" onClick={this.btnHandler} class="btn btn-lg btn-success">send</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobbies is cricket</Person> 
     </div>
  );
}
}

export default App;
