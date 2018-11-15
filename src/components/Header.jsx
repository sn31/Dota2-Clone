import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Authentication from './Authentication';
import Language from './Language';
import Download from './Download';

function Header() {
  return (
    <div>
      <NavBar/>
      <Authentication/>
      <Language/>
      <Download/>
      </div>
  )
}

export default Header
