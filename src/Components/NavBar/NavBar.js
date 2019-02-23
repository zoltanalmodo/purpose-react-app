import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className='NavBar' id='NavBar'>

            <NavLink exact to='/' className='NavItem' activeStyle={
                    { backgroundColor: '#ffff00' }
                }><h1 className='NavButton'>HOME</h1>
            </NavLink>

            <NavLink exact to='/Locations' className='NavItem' activeStyle={
                    { backgroundColor: '#ffff00' }
                }><h1 className='NavButton'>LOCATIONS</h1>
            </NavLink>

            <NavLink exact to='/How-it-works' className='NavItem' activeStyle={
                    { backgroundColor: '#ffff00' }
                }><h1 className='NavButton'>HOW IT WORKS</h1>
            </NavLink>

            <NavLink exact to='/Landlords' className='NavItem' activeStyle={
                    { backgroundColor: '#ffff00' }
                }><h1 className='NavButton'>LANDLORDS</h1>
            </NavLink>

            <NavLink exact to='/Contact' className='NavItem' activeStyle={
                    { backgroundColor: '#ffff00' }
                }><h1 className='NavButton'>CONTACT</h1>
            </NavLink>

            <NavLink exact to='/Radio' className='NavItem' activeStyle={
                    { backgroundColor: '#ffff00' }
                }><h1
                    style={ { color: 'red' }}
                    className='NavButton'
                >
                    RADIO
                </h1>
            </NavLink>

        </div>
    )
}