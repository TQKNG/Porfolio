import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
      <p className='text-pink-600'>Hi, My name is</p>
      <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] pb-4'>Khanh Nguyen</h1>
      {/* <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I am a fresh graduate with experience in MERN stack development</h2> */}
      <p className='font-bold text-[#8892b0] py-4 max-w-[700px]'>As a recent graduate in Computer Programming, I possess experience in MERN stack development. I am a self-motivated learner with a passion for coding and creating web-based applications that optimize business operations.</p>
      <div>
        <button className="group text-white border-2 px-6 py-3 flex items-center hover:bg-pink-600 hover:border-pink-600">View Projects <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3'/></span>
        </button>
      </div>
    </div>
    </div>
  )
}

export default Home