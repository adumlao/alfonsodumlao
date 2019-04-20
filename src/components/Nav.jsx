import React from 'react';
import { Link } from 'react-router-dom';
import Hamburger from './Hamburger'

const Nav = (props) => {
  return(
    <div className="nav">
      <Link className="nav-home"to='/'>ALFONSO</Link>

      <Hamburger {...props}
       toggleHamburger={props.toggleHamburger}
       showHamburger={props.showHamburger}/>

      <div className="all-nav-links">
        <Link className="nav-links" to='/'>Projects</Link>
        <Link className="nav-links" to='/about'>About</Link>
        <Link className="nav-links" to='/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Nav;
