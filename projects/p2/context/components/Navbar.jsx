import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className='navbar navbar-expand navbar-dark bg-dark w-100'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            Home Page
          </Link>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link className='nav-link active' to='/'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/all'>
                  All
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/completed'>
                  Completed
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/today'>
                  Today
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/tomorrow'>
                  Tomorrow
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
