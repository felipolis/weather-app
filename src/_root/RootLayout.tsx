import React from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
      {/* HEADER */}

      {/* MAIN */}
      <section>
        <Outlet />
      </section>
    </div>
  )
}

export default RootLayout