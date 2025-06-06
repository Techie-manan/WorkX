import React from 'react'
import { AniXOnScroll } from './AniOnScroll'

const review = () => {
    return (
        <div className='h-screen bg-blue-950 centre flex-col overflow-hidden'>
           <div className='h-1/2 centre flex-col'> 
           <h1 className='text-6xl font-semibold text-white'>It doesn't get </h1>
            <h1 className='text-5xl font-semibold text-orange-500 my-5'>much easier?</h1>
            </div>
            <AniXOnScroll initial={{ opacity: 0, x: 1000 }}>
                <div className="centre h-1/2 w-screen">
                    <div className="reviewbox centre text-lg font-semibold">Absolutelt amazing service!! It was so nice to have someone help me with essentials around the home. I even came home to flowers on the counter from them one week! They're so nice and really great to work with.</div>
                    <div className="reviewbox  centre flex-col">
                        <h1 className=" text-2xl font-bold">Create your acccount<br /> now!</h1>
                        <button className='px-5 py-2 bg-orange-400 rounded-full m-5 font-bold'>Sign Up</button>
                    </div>
                    <div className="reviewbox">
                        <h1 className=" text-2xl font-bold">Book your<br /> service!</h1>
                        <img src="\assets\booking.png" alt="" />

                    </div>
                    <div className="reviewbox">
                        <h1 className=" text-2xl font-bold">Enjoy your<br /> home!</h1>
                        <img src="\assets\enjoy.png" alt="" />
                    </div>
                </div>
            </AniXOnScroll>

        </div>
    )
}

export default review
