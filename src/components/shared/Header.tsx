import { useGeneralStore } from '../../store/generalStore'
import Logo from './Logo'
import SearchBar from './SearchBar'

const Header = () => {

  const changeSelectedApi = useGeneralStore((state) => state.changeSelectedApi)
  return (
    <div className='flex flex-col justify-center items-center mt-20'>
      {/* LOGO */}
      <Logo />

      {/* SEARCH BAR */}
      <SearchBar />

      <button
          onClick={changeSelectedApi}
        >
          MUDAR
        </button>
    </div>
  )
}

export default Header