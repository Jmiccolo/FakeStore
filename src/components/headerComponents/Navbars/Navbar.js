import React from 'react';
import {Link, BrowserRouter as Router} from 'react-router-dom';

const NavBar = (props) => {
    return (
        <nav className = "navbar">
            <div className="navbar-header">
                <a href="/"><h2>Home</h2></a>
            </div>
            <ul className="navbar-links">
                <li className="navbar-link"><Link to="/products">Products</Link></li>
                <li className="navbar-link"><Link to="/blog">Blog</Link></li>
                <li className="navbar-link"><Link to="/about">About Us</Link></li>
                <li className="navbar-link"><Link to="/cart"><i className="fa fa-shopping-cart fa-2x"></i></Link></li>
            </ul>

        </nav>
    )
};

export default NavBar;