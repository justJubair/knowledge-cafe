
import Profile from '../../assets/images/profile.png'

const Header = () => {
  return (
    <div className='flex justify-between border-b-2 pb-4 mt-8 items-center'>
      <h1 className='text-3xl font-bold'>Knowledge Cafe</h1>
      <img className='w-18' src={Profile} alt="" />
    </div>
  )
}

export default Header
