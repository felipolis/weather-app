import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const RootLayout = () => {
  return (
    <div>
      {/* HEADER */}
      <header className='header'>
        <Header />
      </header>

      {/* MAIN */}
      <section>
        <Outlet />
      </section>
    </div>
  )
}

export default RootLayout