import React, { Component } from 'react';
import logo from './images/purpose-group-logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="App-nav">
          <img src={logo} className="Purpose-logo" alt="logo" />
        </nav>
      </div>
    );
  }
}

export default App;
