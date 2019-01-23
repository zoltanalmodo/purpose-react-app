import React from 'react';

export default function NavItem(props) {
    return (
      <div className='NavItem'>
        <h1>{props.name}</h1>
      </div>
    )
  }