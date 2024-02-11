import { Outlet } from 'react-router-dom'
import SearchContainer from '../components/shared/SearchContainer'

const RootLayout = () => {
  return (
    <div>
      {/* HEADER */}
      <header className='header'>
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