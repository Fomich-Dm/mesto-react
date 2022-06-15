import React from 'react';
import logo from '../images/logo.svg'

function Headers() {
    return(
         <header className="header">
          <img className="header__logo" src={logo} alt="Место" />
        </header>
    )
} 

export default Headers;
