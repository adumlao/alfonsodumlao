import React from 'react';
import { Link } from 'react-router-dom';

const AboutMe = (props) => {
  return(
    <nav>
      <div>Alfonso</div>
      <div>
        <Link to='/'>Projects</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </nav>
  )
}

export default AboutMe;
