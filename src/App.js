import React, { Component } from 'react';
import Labor from './components/Labor';
import Travel from './components/Travel';
import Materials from './components/Materials';

/* import './App.css'; */

class App extends Component {
  render() {
    return (
      <div> 
        <h3>Labor</h3>
      <Labor />
      <h3> </h3>
      <h3>Travel</h3>
      <Travel />
      <h3> </h3>
      <h3>Materials</h3>
      <Materials />

      </div>
      
    )
  }
}

export default App;

