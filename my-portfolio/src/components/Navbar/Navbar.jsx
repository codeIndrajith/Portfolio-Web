import React, { useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menuOpenIcon from '../../assets/menu_open.svg';
import menuCloseIcon from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = '0';
  };
  const closeMenu = () => {
    menuRef.current.style.right = '-350px';
  };

  const liHandler = (menuItem) => {
    setMenu(menuItem);
  };
  return (
    <div className="navbar">
      <AnchorLink href="#home">
        <img className="logo" src={logo} alt="myLogo" />
      </AnchorLink>
      <img
        src={menuOpenIcon}
        onClick={openMenu}
        alt=""
        className="nav-mob-open"
      />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menuCloseIcon}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />
        <AnchorLink className="anchor-link" href="#home">
          <li
            className={menu === 'home' ? 'underline' : 'noUnderline'}
            onClick={() => liHandler('home')}
          >
            Home
          </li>
        </AnchorLink>
        <AnchorLink className="anchor-link" offset={50} href="#about">
          <li
            className={menu === 'about' ? 'underline' : 'noUnderline'}
            onClick={() => liHandler('about')}
          >
            About Me
          </li>
        </AnchorLink>
        <AnchorLink className="anchor-link" offset={50} href="#services">
          <li
            className={menu === 'services' ? 'underline' : 'noUnderline'}
            onClick={() => liHandler('services')}
          >
            Services
          </li>
        </AnchorLink>
        <AnchorLink className="anchor-link" offset={50} href="#work">
          <li
            className={menu === 'work' ? 'underline' : 'noUnderline'}
            onClick={() => liHandler('work')}
          >
            Portfolio
          </li>
        </AnchorLink>
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          <li
            className={menu === 'contact' ? 'underline' : 'noUnderline'}
            onClick={() => liHandler('contact')}
          >
            Contact
          </li>
        </AnchorLink>
      </ul>
      <div className="nav-connect">
        <AnchorLink
          className="anchor-link"
          style={{ color: 'black', fontWeight: '600' }}
          href="#contact"
        >
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
