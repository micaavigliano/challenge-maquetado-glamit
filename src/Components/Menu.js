import React, { useState } from 'react';
import Menu from '../assets/icons/bars-solid.svg';
import User from '../assets/icons/user-solid.svg';

function ExpandMenu() {
    const [showMenu, setShowMenu] = useState(false);
    let content;
    if(showMenu) {
        content = <div className="expanded-mobile-content">
        <a href="/">SALE</a>
        <a href="/">E-SHOP</a>
        <a href="/">LOOKBOOK</a>
        <a href="/">CAMPAÑA</a>
        <a href="/">LOCALES</a>
        <a href="#" aria-label="user" className="user-icon-nav-responsive">
            <img src={User} alt=""/> Ingresá a tu cuenta
        </a>
    </div>
    }
    return (
        <div className="action-mobile-view">
            <button 
                aria-label="Menu" 
                className="btn-mobile"
                aria-expanded="false"
                onClick={() => setShowMenu(!showMenu)}    
            >
                <img src={Menu} alt=""/>
            </button>
            { content }
        </div>
    )
}

export default ExpandMenu;