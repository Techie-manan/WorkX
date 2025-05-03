import React from 'react'
import AniOnScroll from './AniOnScroll'

const whyW = () => {
    return (
        <div className='relative w-full h-screen flex z-0 bg-amber-200'>
            <div className="centre flex-col w-1/2 bg-amber-800">
                <div className='h-fit overflow-hidden'>
                    <AniOnScroll><h1 className='text-8xl font-bold'>Why </h1></AniOnScroll> </div>
                <div className='h-fit overflow-hidden'>
                    <AniOnScroll><h1 className='text-8xl font-bold'>WorkX ?</h1> </AniOnScroll></div>
            </div>
            <div className="w-1/2 bg-amber-800 flex  items-start">
                <AniOnScroll>  <div className='h-[100vh] w-1/2 space-y-3 bg-amber-800 overflow-y-scroll scroll-hide'>
                    <div className="box bg-gray-400 font-semibold text-xl centre">Our Services save your time and reduces stress letting you focus on what is important.</div>
                    <div className="box bg-blue-200 centre flex-col">
                        <img src="src\assets\schedulingg.png" alt="" className='h-[60%]' />
                        <h1 className='text-xl font-medium mt-2'>Simple Scheduling</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>
                    <div className="box bg-amber-100 centre flex-col">
                        <img src="src\assets\guranti.png" alt="" className='h-[60%] rounded-full' />
                        <h1 className='text-xl font-medium mt-2'>Full Gurantee</h1>
                        <p>Lorem ipsum dolor sit amet constur, adipisicing elit.</p>
                    </div>
                    <div className="box bg-pink-200 centre flex-col">
                        <img src="src\assets\comprice.png" alt="" className='h-[60%]' />
                        <h1 className='text-xl font-medium mt-2'>Competitive Pricing</h1>
                        <p>Lorem ipsum dolor sit amet constur, adipisicing elit.</p>
                    </div>

                    <div className="box  bg-gray-400 font-semibold text-xl centre">At WorkX, we are focused on making home what it should be- a place you truly enjoy coming home to </div>
                    <div className="box bg-pink-200 centre flex-col">
                        <img src="src\assets\hapycust.png" alt="" className='h-[60%]' />
                        <h1 className='text-xl font-medium mt-2'>Happy Customers</h1>
                        <p>Lorem ipsum dolor sit amet constur, adipisicing elit.</p>
                    </div>

                </div></AniOnScroll>
            </div>

        </div>
    )
}

export default whyW
