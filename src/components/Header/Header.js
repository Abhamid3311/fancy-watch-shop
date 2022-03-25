import React from 'react';
import './Header.css';
import logo from '../../images/logo.jpg';

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img src={logo} alt="Watch shop logo" />
                <h3>Fancy Watch Shop</h3>
            </div>

            <div className='nav-bar'>
                <a href="#Shop">Shop</a>
                <a href="#product">Product</a>
                <a href="#about">About</a>
            </div>
        </div>
    );
};

export default Header;