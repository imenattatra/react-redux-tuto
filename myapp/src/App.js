import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends  Component{
  render(){
    return (
      <div className="App">
        <h1>react app</h1>
        <p>welcome</p>
        <Ninjas name='Imen' age='26' belt='white'/>
      </div>
      );
  };
}

export default App;
