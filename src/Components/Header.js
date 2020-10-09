import React from 'react';
import Logo from '../assets/logo.svg';
import Search from '../assets/icons/search-solid.svg';
import Shopping from '../assets/icons/shopping-cart-solid.svg';
import User from '../assets/icons/user-solid.svg';
import ExpandMenu from '../Components/Menu';
import '../styles/header.scss';

function Header() {
    return (
        <header>
            <div className="logo-container">
                <ExpandMenu />
                <img src={Logo} className="logo" alt="La Preuve Logo"/>
                <div className="action-mobile-view-cart">
                    <a href="#" aria-label="Menu" className="cart-mobile">
                        <img src={Shopping} alt=""/>
                    </a>
                </div>
                <div className="action-options">
                    <div className="action-logo">
                        <a href="#" aria-label="Search" className="search-icon-nav">
                            <img src={Search} alt=""/>
                        </a>
                    </div>
                    <div className="action-logo">
                        <a href="#" aria-label="Shopping Cart" className="cart-icon-nav">
                            <img src={Shopping} alt=""/>
                        </a>
                    </div>
                    <div className="action-logo">
                        <a href="#" aria-label="user" className="user-icon-nav">
                            <img src={User} alt=""/>
                        </a>
                    </div>
                </div>
            </div>
            <nav>
                <ul>
                    <li><a href="#">SALE</a></li>
                    <li><a href="#">E-SHOP</a></li>
                    <li><a href="#">LOOKBOOK</a></li>
                    <li><a href="#">CAMPAÑA</a></li>
                    <li><a href="#">LOCALES</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;