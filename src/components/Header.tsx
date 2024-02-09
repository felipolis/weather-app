import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const Header = () => {
  return (
    <div className='container'>
      {/* LOGO */}
      <Link to="/" className='logo'>
        <img src="images/logo.png" alt="logo" />
      </Link>

      {/* SEARCH BAR */}
      <SearchBar />


    </div>
  )
}

export default Header