import React from 'react'
import './home.css'
import AniOnScroll from './AniOnScroll'

const aboutW = () => {
    return (
        <div className='relative h-screen w-screen bg-orange-500 p-20'>
            <div className='text'>
                  <div className='h-fit overflow-hidden'>
                  <AniOnScroll><h1 className='fadeY'>We are on a mission</h1> </AniOnScroll>
                </div> 
                    <div className='h-fit overflow-hidden'>  
                    <AniOnScroll> <h1 className='fadeY'>to take hassle</h1></AniOnScroll>
                </div>
                 <div className='h-fit overflow-hidden'> 
                 <AniOnScroll>   <h1 className='fadeY'>out of home</h1></AniOnScroll>
                 </div>
                </div>

            <div id="" className='w-2/3 h-fit sofa absolute left-1/2 top-1/5'>
                <img src="src\assets\sofaa.png" alt="" /></div>

            <div className='para absolute top-3/5'>
                <p>By living in a building powered by <br />WorkX, you have access to more<br /> than just to live</p>
                <p className='mt-5'>Your apartment has provided you<br /> with your own delicatd home management  team fully integerated <br />into your building</p>
            </div>
        </div>
    )
}

export default aboutW
