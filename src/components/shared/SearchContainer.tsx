import Logo from './Logo'
import SearchBar from './SearchBar'
import ChangeAPI from './ChangeAPI'
import HistoryBtn from './HistoryBtn'

const SearchContainer = () => {

  return (
    <div className='flex flex-col justify-center items-center mt-20 w-full'>
      {/* LOGO */}
      <Logo />

      {/* SEARCH BAR */}
      <SearchBar />

      {/* CHANGE API */}
      <ChangeAPI />

      {/* HISTORY */}
      <HistoryBtn />
    </div>
  )
}

export default SearchContainer