import React, { useState } from 'react'
import bgImage from '../img/bg-dark.jpg'
import { Link, useNavigate } from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {user, signUp} = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await signUp(email, password)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <main class='w-full h-screen'>
        <img src={bgImage} alt="Netflix Background" className='hidden sm:block absolute w-full h-full object-cover' />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold'>Sign Up</h1>
                    <form className="w-full flex flex-col py-4" onSubmit={handleSubmit}>
                        <input type="email" placeholder='Email' className="p-3 my-2 bg-gray-600 rounded" autoComplete="email" onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder='Password' className="p-3 my-2 bg-gray-600 rounded" autoComplete='current-password' onChange={(e) => setPassword(e.target.value)} />
                        <button className="bg-red-600 py-3 my-6 rounded font-bold">Sign Up</button>
                        <div className='flex justify-between items-center text-sm text-gray-600'>
                            <p><input type="checkbox" className='mr-2' /> Remember me</p>
                            <p className='cursor-pointer'>Need Help?</p>
                        </div>
                        <p className='py-8'><span className='text-gray-600'>Already subscribed to Netflix?</span>{' '}
                        <Link to='/login'>
                        Sign In
                        </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </main>
  )
}

export default SignUp
