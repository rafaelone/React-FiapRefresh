import React from 'react'
import { NavLink } from 'react-router-dom';
import './index.css'
import DrawerToggle from '../drawerToggle';
import Logo from '../../assets/logo.png'

const header =  (props)  =>  (
    <header>
        <nav className="navbar">
            <DrawerToggle />
           <div className="navbar-logo">
            <span>Mercado livre</span>
            <img src={Logo} alt="Logo mercado livre"/>
           </div>
            <ul className="navbar-list">
                <li className="navbar-item">
                    <NavLink to={'/'}>Home</NavLink>
                </li>
            </ul>
        </nav>
    </header>
)

export default header