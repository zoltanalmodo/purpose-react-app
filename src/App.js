import React, { Component } from 'react';
import NavItem from './NavItem';
import logo from './images/purpose-group-logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="TopNav">
          <img src={logo} className="purpose-logo" alt="Purpose-group-logo" />
          <div className='NavBar'>  
            <NavItem name='HOME' />
            <NavItem name='LOCATION' />
            <NavItem name='HOW IT WORKS' />
            <NavItem name='LANDLORDS' />
            <NavItem name='CONTACT' />
          </div>
        </nav>
      </div>
    );
  }
}



export default App;
