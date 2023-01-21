import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex justify-between bg-gray-200 w-full p-4'>
      <h1 className='text-center text-red-400 text-2xl font-bold'>
      Usar Authentication using firebase 
      </h1>
      {user?.displayName ? (
        <button className='btn text-red-600 border-black rounded p-1' onClick={handleSignOut}>Logout</button>
      ) : (
        <Link className='btn bg-red-600 text-white border-black rounded p-1' to='/signin'>Sign in</Link>
      )}
    </div>
  );
};

export default Navbar;