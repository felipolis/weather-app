import React from 'react'
import { Link } from 'react-router-dom'

const SearchBar = () => {
  return (
    <>
      <div className='search-view'>
        <div className='search-wrapper'>
          <input 
            type="search" 
            name='search' 
            className='search-field'
            placeholder='Search City ...' 
            autoComplete='off'
          />
          <span className='m-icon'>Search</span>

          <button className='icon-btn leading-icon has-state'>
            <span className='m-icon'>arrow_back</span>
          </button>
        </div>

        <div className='search-result'>
          <ul className='view-list'>
            <li className='view-item'>
              <span className='m-icon'>location_on</span>

              <div>
                <p className='item-title'>
                  London
                </p>

                <p className='label-2 item-subtitle'>
                  State of London, GB
                </p>
              </div>

              <Link to='/' className='item-link has-state'>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className='header-actions'>
        <button className='icon-btn has-state'>
          <span className='m-icon icon'>
            Search
          </span>
        </button>

        <Link
          to={'/current-location'}
          className='btn-primary has-state'
        >
          <span className='m-icon'>my_location</span>

          <span className='span'>Current Location</span>
        </Link>
      </div>
    </>
  )
}

export default SearchBar