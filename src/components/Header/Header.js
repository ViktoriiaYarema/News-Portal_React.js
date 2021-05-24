import React from 'react';
import './Header.scss'
import Logo from "./Logo/Logo";
import NavBar from './NavBar/NavBar';

function Header() {
    return (
      <div className="Header">
        <Logo/>
        <NavBar/>
      </div>
    );
  }
  
  export default Header;