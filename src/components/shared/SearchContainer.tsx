import Logo from './Logo'
import SearchBar from './SearchBar'
import ChangeAPI from './ChangeAPI'

const SearchContainer = () => {

  return (
    <div className='flex flex-col justify-center items-center mt-20 w-full'>
      {/* LOGO */}
      <Logo />

      {/* SEARCH BAR */}
      <SearchBar />

      {/* CHANGE API */}
      <ChangeAPI />
    </div>
  )
}

export default SearchContainer