import React, { Component } from 'react';
import logo from './images/purpose-group-logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="Top-nav">
          <img src={logo} className="purpose-logo" alt="Purpose-group-logo" />
          <div className='Nav-bar'>  
            <h1 className='nav-item-active'>HOME</h1>
            <h1 className='nav-item'>LOCATION</h1>
            <h1 className='nav-item'>HOW IT WORKS</h1>
            <h1 className='nav-item'>LANDLORDS</h1>
            <h1 className='nav-item'>CONTACT</h1>
          </div>  
        </nav>
      </div>
    );
  }
}

export default App;
