import React,{ Component } from 'react';
import './App.css';
import Content from './Components/Content';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      data :0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    }
    this.setNewNumber = this.setNewNumber.bind(this)
  };
  setNewNumber(){
    this.setState({data: this.state.data + 1})
  }
  render(){
  return (
    <div className="App">
      <button onClick = {this.setNewNumber}>Increase</button>
      <Content myNum = {this.state.data} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    </div>
  );
  }
}                                     


export default App;
