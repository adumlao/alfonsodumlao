import React from 'react';
import { Link } from 'react-router-dom';

const AboutMe = (props) => {
  return(
    <nav>
      <Link className="nav-home"to='/'>ALFONSO</Link>
      <div>
        <Link className="nav-links" to='/'>Projects</Link>
        <Link className="nav-links" to='/about'>About</Link>
        <Link className="nav-links" to='/contact'>Contact</Link>
      </div>
    </nav>
  )
}

export default AboutMe;
