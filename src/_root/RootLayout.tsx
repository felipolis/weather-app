import { Outlet } from 'react-router-dom'
import SearchContainer from '../components/shared/SearchContainer'

const RootLayout = () => {
  return (
    <div>
      {/* HEADER */}
      <header className='mx-auto max-w-screen-lg'>
        <SearchContainer />
      </header>

      {/* MAIN */}
      <section>
        <Outlet />
      </section>
    </div>
  )
}

export default RootLayout