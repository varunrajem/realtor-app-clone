import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const loc = useLocation()
  console.log(loc)

  function pathroute(route) {
    if (route === loc.pathname) {
      return true
    }
  }

  return (
    <>
      <div className='flex justify-between items-center px-5 max-w-7xl mx-auto'>
        <img src='https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg' onClick={() => navigate('/')} className='h-6 cursor-pointer' alt='logo' />
        <div>
          <ul className='flex justify-center gap-10'>
            <li onClick={() => navigate('/')}
              className={`text-md font-medium border-b-2 cursor-pointer ${pathroute('/') && "border-b-red-500"}`}
            >Home</li>
            <li onClick={() => navigate('/offers')}
              className={`text-md font-medium border-b-2 cursor-pointer ${pathroute('/offers') && "border-b-red-500"}`}
            >Offers</li>
          </ul>
        </div>
        <div className=''>
          <button className='border border-black hover:bg-gray-200 rounded m-3 p-1'>Manage rentals</button>
          <button className='border border-black hover:bg-gray-200 rounded m-3 p-1'>Advertise</button>
        </div>
        <div className=''>
          <button onClick={() => navigate('/sign-in')} className={`m-3 border-b-2 ${pathroute('/sign-in') && "border-b-red-500"}`}>Log in</button>
          <button onClick={() => navigate('/sign-up')} className={`border-b-2 bg-red-600 text-white rounded-full m-3 p-1 px-5 ${pathroute('/sign-in') && "border-b-red-500"}`}>Sign up</button>
        </div>
      </div>
    </>

  )
}

export default Header