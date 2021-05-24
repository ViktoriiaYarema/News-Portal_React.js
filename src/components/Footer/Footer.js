import React  from 'react';
import Logo from "../Header/Logo/Logo";
import './Footer.scss';

const Footer = () => {
    return (
      <div className="Footer">
        <div className ="Footer__logo">
          <Logo/>
          <p className = "Footer__spa">Single Page Application</p>
        </div>       
        <div className ="Footer__name">Дипломный проект</div>
        <div className ="Footer__about">
          <p>Made by</p>
          <h2>Viktoria Yarema</h2>
        </div>
      </div>
    );
  }
  
  export default Footer;