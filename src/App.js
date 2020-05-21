import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends  Component{
  state={
    ninjas:[
      {name:'first',age:14,belt:'black',id:1},
      {name:'second',age:12,belt:'white',id:2}
    ]
  }
  addNinja=(ninja)=>{
    ninja.id=Math.random();
    let ninjas=[...this.state.ninjas,ninja]; // using spead operator
    this.setState({
      ninjas : ninjas
    })
    console.log(ninjas)
  }
  render(){
    return (
      <div className="App">
        <h1>react app</h1>
        <p>welcome</p>
        <Ninjas ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
      );
  };
}

export default App;
