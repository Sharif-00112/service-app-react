import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='navbar'>
            <div className="">
                <Link to="/home">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="login">
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Header;