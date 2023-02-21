import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { signInWithGoogle } from '../services/firebase'

const OAuth = () => {

  return (
    <div>
      <button onClick={signInWithGoogle} className='flex border border-black bg-gray-200  rounded m-3 p-1'>
        <FcGoogle />
        Continue With Google
      </button>
    </div>
  )
}

export default OAuth