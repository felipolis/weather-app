import Logo from '../components/shared/Logo'
import SearchBar from '../components/shared/SearchBar'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-[30vh]'>
      {/* LOGO */}
      <div className='w-[40%]'>
        <Logo/>
      </div>

      {/* SEARCH BAR */}
      <SearchBar/>
    </div>
  )
}

export default Home