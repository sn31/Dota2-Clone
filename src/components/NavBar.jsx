import React from 'react'
import { Link } from 'react-router-dom'
import logoSmall from '../assets/images/logoS.png'
import Authentication from './Authentication'
import Language from './Language'
import Download from './Download'

function NavBar() {
  return (
    <div style={{marginLeft:'12em', marginRight:'auto'}}>
      <style jsx>{`
        ul {
          list-style-type: none;
          padding-left: 0;
          font-size: 1.5em;
          color: #1e704b;
        }
        ,
        li {
          display: inline-block;
          float: left;
          margin-right: 1em;
          color: white;
        }
      `}</style>
      <ul>
        <li>
          <Link to="/">
            <img src={logoSmall} />
          </Link>
        </li>
        <li>
          <Link to="/news" style={{color:'white', textDecoration:'none'}}>News</Link>
        </li>
        <li>
          <Link to="/store" style={{color:'white', textDecoration:'none'}}>Store</Link>
        </li>
        <li>
          <Link to="/heropedia" style={{color:'white', textDecoration:'none'}}>Heropedia</Link>
        </li>
        <li>
          <Authentication/>
        </li>
        <li>
          <Language/>
        </li>
        <li>
          <Download/>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
