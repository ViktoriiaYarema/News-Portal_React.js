import React from 'react';
import { NavLink } from 'react-router-dom';
import "./NavBar.scss";

function NavBar() {
    return (
      <div className="NavBar">
        <nav>
          <ul>
           <li><NavLink exact to= '/'>Главная</NavLink></li>
           <li><NavLink exact to= '/AllNews'>Новости</NavLink></li>
           <li><NavLink exact to= '/Contacts'>Контакты</NavLink></li>
          </ul>
        </nav>
      </div>
    );
  }
  
  export default NavBar;