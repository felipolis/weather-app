import Logo from './Logo'
import SearchBar from './SearchBar'

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-20'>
      {/* LOGO */}
      <Logo />

      {/* SEARCH BAR */}
      <SearchBar />
    </div>
  )
}

export default Header