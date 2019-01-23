import React, { Component } from 'react';
import logo from './images/purpose-group-logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="App-nav">
          <img src={logo} className="Purpose-logo" alt="Purpose-group-logo" />
          <div>HOME</div>
          <div>LOCATION</div>
          <div>HOW IT WORKS</div>
          <div>LANDLORDS</div>
          <div>CONTACT</div>
        </nav>
      </div>
    );
  }
}

export default App;
