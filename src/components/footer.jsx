import React from 'react'
import '@flaticon/flaticon-uicons/css/all/all.css';


const footer = () => {
  return (
    <div className="bg-gray-950 text-white py-4 centre h-[40vh] box-shadow-2xl">
      <div className='flex-2/5 ml-15 flex flex-col gap-5'>
        <h1 className='text-4xl font-bold '>Work<span className='text-orange-600'>X</span></h1>
        <div className="flex gap-6 text-white text-xl">
          <i className="fi fi-brands-instagram hover:text-pink-500 hover:scale-110 transition-transform duration-300 cursor-pointer"></i>
          <i className="fi fi-brands-twitter-alt hover:text-blue-400 hover:scale-110 transition-transform duration-300 cursor-pointer"></i>
          <i className="fi fi-brands-whatsapp hover:text-green-400 hover:scale-110 transition-transform duration-300 cursor-pointer"></i>
        </div>
        <div className="flex gap-6 text-white text-xl ">
          <i className="fi fi-brands-github hover:text-gray-400 hover:scale-110 transition-transform duration-300 cursor-pointer"></i>
          <i className="fi fi-brands-linkedin hover:text-blue-600 hover:scale-110 transition-transform duration-300 cursor-pointer"></i>
          <i className="fi fi-brands-reddit hover:text-orange-500 hover:scale-110 transition-transform duration-300 cursor-pointer"></i>
        </div>
        </div >
        <div className='flex-1/5 flex flex-col gap-2 ju'>
          <h1 className='font-bold'>Company</h1>
          <h2>Building Partners</h2>
          <h2>About Us</h2>
          <h2>Contact Us</h2>
        </div>

        <div className='flex-1/5 flex flex-col gap-2'>
          <h1 className='font-bold'>Services</h1>
          <h2>Bundles</h2>
          <h2>Cleaning</h2>
          <h2>Errands & Chores</h2>
          <h2>Special Reguests</h2>
        </div>

        <div className='flex-1/5 flex flex-col gap-5'>
          <h1 className='font-bold'>Newsletter</h1>
          <input type="text" placeholder='Enter your email' className='rounded-full' />
        </div>
      </div>
      )
}

      export default footer
