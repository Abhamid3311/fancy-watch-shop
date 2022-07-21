import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>

                <h3>Fancy Watch Shop</h3>
            </div>

            <div className='nav-bar'>
                <a href="#Shop">Shop</a>
                <a href="#product">Products</a>
                <a href="#about">About</a>
                <a href="#contact">Contact Us</a>
            </div>
        </div>
    );
};

export default Header;