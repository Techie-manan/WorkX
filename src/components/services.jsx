import React from 'react'
import AniOnScroll, { AniYOnScroll } from './AniOnScroll'

const services = () => {
  return (
    <div className='centre flex-col  h-fit bg-gray-50'>
      <div className='m-10'>
        <AniOnScroll> <h1 className='text-6xl font-bold my-2 '>Home Management,</h1></AniOnScroll>
        <AniOnScroll> <h1 className='text-6xl font-bold my-2'>Simplified</h1></AniOnScroll>
        <AniOnScroll>  <h1 className='text-4xl font-semibold my-5'>Choose
          <span className='font-bold'> your service now!!</span>
        </h1></AniOnScroll>
      </div>

      <div className="flex w-1/2 h-fit overflow-hidden">

        <div className="flex-col">

          <AniYOnScroll> <div className="servicebox relative bg-blue-200 flex flex-col">
            <h1 className='text-2xl font-semibold mt-2'>Women's Parlour <br />& Spa</h1>
            <img src="src\assets\womensaloon.png" alt="" height='50' className='ml-12' />
            <button className='absolute bottom-6 bg-white rounded-full'><img src="src\assets\image.png" alt="" className='h-10' /></button>
          </div></AniYOnScroll>

          <AniYOnScroll> <div className="servicebox relative bg-amber-100 flex flex-col">
            <h1 className='text-2xl font-medium mt-2'>Home Cleaning <br /> Services</h1>
            <img src="src\assets\cleaning.png" alt="" className='h-[60%] ml-12' />
            <button className='absolute bottom-6 bg-white rounded-full'><img src="src\assets\image.png" alt="" className='h-10' /></button>
          </div></AniYOnScroll>

          <AniYOnScroll> <div className="servicebox relative bg-white flex flex-col">
            <h1 className='text-2xl font-medium mt-2'>Home Interior &<br /> Designing</h1>
            <img src="src\assets\interior.png" alt="" className='h-[60%] ml-12' />
            <button className='absolute bottom-6 bg-white rounded-full'><img src="src\assets\image.png" alt="" className='h-10' /></button>
          </div></AniYOnScroll>

        </div>
        <div className="flex-col">

          <AniYOnScroll><div className="servicebox bg-gray-200 font-semibold text-xl centre">Our Services save your time and reduces stress letting you focus on what is important.</div></AniYOnScroll>

          <AniYOnScroll> <div className="servicebox relative bg-blue-300 flex flex-col">
            <h1 className='text-2xl font-semibold mt-2'>Men's Sallon <br /> & Massage</h1>
            <img src="src\assets\mensaloon.png" alt="" height='50' className='ml-12' />
            <button className='absolute bottom-6 bg-white rounded-full'><img src="src\assets\image.png" alt="" className='h-10' /></button>
          </div></AniYOnScroll>

          <AniYOnScroll>  <div className="servicebox relative bg-gray-100 flex flex-col">
            <h1 className='text-2xl font-semibold mt-2'>Home Appliances <br /> Repairing</h1>
            <img src="src\assets\appliance.png" alt="" height='50' className='ml-12' />
            <button className='absolute bottom-6 bg-white rounded-full'><img src="src\assets\image.png" alt="" className='h-10' /></button>
          </div></AniYOnScroll>

          <AniYOnScroll> <div className="servicebox relative bg-pink-100 centre flex-col">
            <img src="src\assets\services.png" alt="" className='h-[60%]' />
            <h1 className='absolute right-1 bottom-5 text-xl font-medium mt-2'>Electrician, Plumber <br /> & Carpenter</h1>
            <button className='absolute bottom-6 left-6 bg-white rounded-full'><img src="src\assets\image.png" alt="" className='h-10' /></button>
          </div></AniYOnScroll>

        </div>
      </div>
    </div>
  )
}

export default services
