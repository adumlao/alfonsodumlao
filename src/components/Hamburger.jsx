import React from 'react';
import { Link } from 'react-router-dom';

const Hamburger = (props) => {
  return(
    <div>
    {props.showHamburger === true ?
    <div
    onClick={props.toggleHamburger}
    className='hamburger-icon'
    style={{backgroundImage: 'url(/media/hamburger.png)'}}></div> :

    <div
     className="hamburger-links"
     onClick={props.toggleHamburger}>
      <Link className="hamburger-nav-links" to='/'>Projects</Link>
      <Link className="hamburger-nav-links" to='/about'>About</Link>
      <Link className="hamburger-nav-links" to='/contact'>Contact</Link>
    </div>
    }

    </div>
  )
}

export default Hamburger;
