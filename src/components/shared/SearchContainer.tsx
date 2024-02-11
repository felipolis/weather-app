import Logo from './Logo'
import SearchBar from './SearchBar'
import ApiSwitchButton from './ApiSwitchButton'
import HistoryBtn from './HistoryButton'

const SearchContainer = () => {

  return (
    <div className='flex flex-col justify-center items-center mt-20 w-full'>
      {/* LOGO */}
      <Logo />

      {/* SEARCH BAR */}
      <SearchBar />

      {/* CHANGE API */}
      <ApiSwitchButton />

      {/* HISTORY */}
      <HistoryBtn />
    </div>
  )
}

export default SearchContainer