import React from 'react';
import NavBar from './NavBar.js'
import logo from './images/purpose-group-logo.png';

export default function TopNav() {
    return (
        <nav className="TopNav">
            <img src={logo} className="purpose-logo" alt="Purpose-group-logo" />
            <NavBar />
        </nav>
    )
  }

