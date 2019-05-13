import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Navigation() {
  return (
<nav className='Nav'>
<NavLink className='Nav-link' activeClassName='is-active' exact to='/'>Hom</NavLink>
<NavLink className='Nav-link' activeClassName='is-active' to='/About'>About</NavLink>
<NavLink className='Nav-link' activeClassName='is-active' to='/Portfolio'>Portfolio</NavLink>
<NavLink className='Nav-link' activeClassName='is-active' to='/Contact'>Contact</NavLink>

</nav>
  );
}


