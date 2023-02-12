import Logo from '../images/logo.svg';
import OpenMenu from '../images/icon-hamburger.svg';
import CloseMenu from '../images/icon-close.svg';
import '../styles/Navbar.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isMenuClose, setIsMenuClose] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false)
    setIsMenuClose(true)
    setIsNavOpen(true)
  }
  const openMenu = () => {
    setIsMenuOpen(true)
    setIsMenuClose(false)
    setIsNavOpen(false)
  }

  return (
    <header className='header'>
      <div className='logo'>
        <img src = {Logo} alt = 'Logo' />
      </div>
      <div className='hr'></div>
      <nav className={isNavOpen ? 'active': ''}>
        <ul>
          <li>
          <NavLink to="/">
            <p>00</p><span>HOME</span>
          </NavLink>
          </li>
          <li>
            <NavLink to="/destination">
              <p>01</p><span>DESTINATION</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/crew">
              <p>02</p><span>CREW</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="technology">
              <p>03</p><span>TECHNOLOGY</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className='menu-close-open'>
        <img src = {OpenMenu} className = {isMenuOpen ? "open-menu" : "open-menu active"} alt ="open-icon" onClick={closeMenu}/>
        <img src = {CloseMenu} className = {isMenuClose ? "close-menu active" : "close-menu"} alt ="close-icon" onClick={openMenu}/>
      </div>
    </header>
  )
}

export default Navbar;
