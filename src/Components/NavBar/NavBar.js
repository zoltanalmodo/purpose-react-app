import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className='NavBar'>

            <NavLink exact to='/' className='NavItem' activeStyle={
                    { backgroundColor: '#ffff00' }
                }><h1>HOME</h1>
            </NavLink>

            <NavLink exact to='/Locations' className='NavItem' activeStyle={
                    { backgroundColor: '#ffff00' }
                }><h1>LOCATIONS</h1>
            </NavLink>

            <NavLink exact to='/How-it-works' className='NavItem' activeStyle={
                    { backgroundColor: '#ffff00' }
                }><h1>HOW IT WORKS</h1>
            </NavLink>

            <NavLink exact to='/Landlords' className='NavItem' activeStyle={
                    { backgroundColor: '#ffff00' }
                }><h1>LANDLORDS</h1>
            </NavLink>

            <NavLink exact to='/Contact' className='NavItem' activeStyle={
                    { backgroundColor: '#ffff00' }
                }><h1>CONTACT</h1>
            </NavLink>

        </div>
    )
}