import React from 'react'
import AniOnScroll from './AniOnScroll'

const landing = () => {
  return (
    <div className='relative w-full h-screen centre flex-col z-0 bg-white'>
      <div className=' text-8xl font-bold centre flex-col text-center z-10 p-5'>
        <AniOnScroll> <h1 className='flex p-2 '> <span className='flex mx-3 colorani'>All
          <img src="\assets\services.png" alt="" className='h-30 mx-2 width0' /> the </span>services</h1></AniOnScroll>
        <AniOnScroll> <h1 className='centre p-2'> you need<img src="\assets\image copy.png" alt="" className='h-25 mx-5 width0' />, <span className='colorani'> right </span></h1></AniOnScroll>
        <AniOnScroll>  <h1>at your <span className='colorani'>tips </span> </h1></AniOnScroll>
      </div>

      <div className='absolute centre w-full h-screen centre z-0 opacity-0 bg-orange-400 fadeY'>
        <div className='w-[60%] h-full flex flex-col'>
          <div className="flex-1/3">
          <img src="\assets\PURSE.png" alt="" className='-rotate-20 scale'/>
          </div>
          <div className="flex-1/3">
           <img src="\assets\cleaner.png" alt="" className='rotate-20 scale justify-self-end'/>
          </div>
          <div className="flex-1/3">
           <img src="\assets\WASHMACH.png" alt="" className='-rotate-18 scale ml-50'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default landing
