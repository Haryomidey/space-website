import Logo from '../images/logo.svg';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <img src = {Logo} alt = 'Logo' />
      </div>
      <div className='hr'></div>
      <nav>
        <ul>
          <li><p>00</p><span>HOME</span></li>
          <li><p>01</p><span>DESTINATION</span></li>
          <li><p>02</p><span>CREW</span></li>
          <li><p>03</p><span>TECHNOLOGY</span></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;
