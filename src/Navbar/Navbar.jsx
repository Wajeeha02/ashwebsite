// Navbar.jsx
import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='nav-bar'>
            <div className='name-logo'>
                <p>WELCOME TO ASH SOLUTIONS AND TRAINING!</p>
            </div>
            <div className='nav-links'>
                <button className='toggle-btn' onClick={toggleNavbar}>X</button>
                <ul className={`${isOpen ? '' : 'show'}`}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/About'>About</Link></li>
                    <li><Link to='/Services'>Services</Link></li>
                    <li><Link to='/Contact'>Contact</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
