import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => (
  <header className='Header-header'>
    <h1 className='Header-h1'>Albuquerque Publishing Company Job Board</h1>
    <nav className='Header-nav'>
      <NavLink
        exact to='/'
        className='Header-navLink'
        activeClassName='Header-isActive'
      >
        Home
      </NavLink>
      <NavLink
        to='/jobs'
        className='Header-navLink'
        activeClassName='Header-isActive'
      >
        Jobs
      </NavLink>
    </nav>
  </header>
)
