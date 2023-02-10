import React from 'react';

const Navbar = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF" /><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" /></g></svg>
        </h1>
      </div>
      <nav>
        <ul>
          <li><h1>00</h1><p>HOME</p></li>
          <li><h1>01</h1><p>DESTINATION</p></li>
          <li><h1>02</h1><p>CREW</p></li>
          <li><h1>03</h1><p>TECHNOLOGY</p></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;
