import React from 'react';
import NavBar from './NavBar/NavBar.js'
import logo from './images/purpose-group-logo.png';

export default function TopNav() {
    return (
        <div className="TopNav">
            <img src={logo} className="purpose-logo" alt="Purpose-group-logo" />
            <NavBar />
        </div>
    )
  }

