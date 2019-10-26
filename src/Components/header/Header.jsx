import React from 'react'
import { NavLink } from 'react-router-dom';
import './index.css'
import DrawerToggle from '../drawerToggle';

const header =  (props)  =>  (
    <header>
        <nav className="navbar">
            <DrawerToggle />
            <span>Mercado livre</span>
            <ul className="navbar-list">
                <li className="navbar-item">
                    <NavLink to={'/'}>Home</NavLink>
                </li>
            </ul>
        </nav>
    </header>
)

export default header