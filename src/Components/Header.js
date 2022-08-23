import React from 'react';
import Logo from '../Images/logo.png';
import './Header.css';

function Header() {
  return (
    <div className='note_header' >
        <img className='note_logo' src={Logo} alt="logo" />
        <h1 className='note_heading'>Note Keeper</h1>
    </div>
  )
}

export default Header
