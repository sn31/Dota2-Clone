import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <ul>
      <style jsx>{`
        ul {
          list-style-type: none;
          padding-left: 0;
          font-size: 1.5em;
          color:#1e704b;
        },
        li {
          display: inline-block;
          float: left;
          margin-right: 1em;
        },
        `}</style>
      <li><Link to="/"><img src="http://cdn.dota2.com/apps/dota2/images/nav/logo.png"/></Link></li>
      <li><Link to="/news">News</Link></li>
      <li><Link to="/store">Store</Link></li>
      <li><Link to="/heropedia">Heropedia</Link></li>
    </ul>
  )
}

export default NavBar