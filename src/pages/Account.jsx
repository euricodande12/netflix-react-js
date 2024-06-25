import React from 'react'
import bgImage from '../img/bg-dark.jpg'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <main className='w-full text-white'>
      <img src={bgImage} alt="Netflix Background" className='w-full h-[400px] object-cover' />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px"></div>
      <div className="absolute top-[20%] p-4 md:p-8">
        <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
      </div>
      <SavedShows />
    </main>
  )
}

export default Account
