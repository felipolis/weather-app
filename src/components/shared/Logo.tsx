import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/" className='w-[60%]'>
      <img src="images/logo.png" alt="logo" className='w-full' />
    </Link>
  )
}

export default Logo