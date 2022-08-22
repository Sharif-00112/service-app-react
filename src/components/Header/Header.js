import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => { 
    return (
        <div className='navbar'>
            <div className="navLinks">
                <Link to="/home">Home</Link>
                <Link to="/services">Courses</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="">
                <button className='custom-btn'><Link to="/login">Login</Link></button>
            </div>
        </div>
    );
};

export default Header;