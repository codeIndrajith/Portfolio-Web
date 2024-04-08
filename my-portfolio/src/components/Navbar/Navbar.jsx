import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/react.svg';

const Navbar = () => {
  const [menu, setMenu] = useState('home');

  const liHandler = (menuItem) => {
    setMenu(menuItem);
  };
  return (
    <div className="navbar">
      <img src={logo} alt="myLogo" />
      <ul className="nav-menu">
        <li
          className={menu === 'home' ? 'underline' : 'noUnderline'}
          onClick={() => liHandler('home')}
        >
          Home
        </li>
        <li
          className={menu === 'about' ? 'underline' : 'noUnderline'}
          onClick={() => liHandler('about')}
        >
          About Me
        </li>
        <li
          className={menu === 'services' ? 'underline' : 'noUnderline'}
          onClick={() => liHandler('services')}
        >
          Services
        </li>
        <li
          className={menu === 'work' ? 'underline' : 'noUnderline'}
          onClick={() => liHandler('work')}
        >
          Portfolio
        </li>
        <li
          className={menu === 'contact' ? 'underline' : 'noUnderline'}
          onClick={() => liHandler('contact')}
        >
          Contact
        </li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;
