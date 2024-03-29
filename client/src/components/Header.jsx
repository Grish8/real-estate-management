import React from 'react';
import {FaSearch} from 'react-icons/fa';//import icons from font-awesome.installed using(npm i react-icons)
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-slate-300 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
          <Link to={'/'}>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span className = "text-slate-500">JoeDilma</span>
                 <span className= "text-slate-700">Estate</span>
            </h1>
          </Link>

<form className='bg-slate-300 p-3 rounded-lg flex items-center'>
    <input type="text" placeholder ="Search..." className='bg-transparnt focus:outline-none w-24 sm:w-64'  />
    <FaSearch className='text-slate-600'/>
</form>

<ul className='flex gap-4'>
  <Link to={'/Home'}>
    <li className='hidden sm:inline m:inline text-slate-700 hover:underline'>Home</li>
  </Link>

  <Link to={'/about'}>
    <li className='hidden sm:inline m:inline text-slate-700 hover:underline'>About</li>
  </Link>

  <Link to={'/sign-in'}>
    <li className=' text-slate-700 hover:underline'>Sign In</li>
  </Link>

  <Link to={'/admin'}>
    <li className='hidden sm:inline m:inline text-slate-700 hover:underline hover:text-green-600'>Admin</li>
  </Link>

    <Link to={'/tenant'}>
    <li className='hidden sm:inline m:inline text-slate-700 hover:text-green-600 hover:underline'>Tenant </li>
    </Link>

</ul>
</div>
    </header>
    
  )
}
