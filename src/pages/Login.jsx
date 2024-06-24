import React from 'react'
import bgImage from '../img/bg-dark.jpg'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <main class='w-full h-screen'>
        <img src={bgImage} alt="Netflix Background" className='hidden sm:block absolute w-full h-full object-cover' />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold'>Sign In</h1>
                    <form className="w-full flex flex-col py-4">
                        <input type="email" placeholder='Email' className="p-3 my-2 bg-gray-600 rounded" autoComplete="email" />
                        <input type="password" placeholder='Password' className="p-3 my-2 bg-gray-600 rounded" autoComplete='current-password' />
                        <button className="bg-red-600 py-3 my-6 rounded font-bold">Sign In</button>
                        <div className='flex justify-between items-center text-sm text-gray-600'>
                            <p><input type="checkbox" className='mr-2' /> Remember me</p>
                            <p className='cursor-pointer'>Need Help?</p>
                        </div>
                        <p className='py-8'><span className='text-gray-600'>New to Netflix?</span>{' '}
                        <Link to='/signup'>
                        Sign Up
                        </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Login
