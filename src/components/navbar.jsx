import React from 'react'

const navbar = () => {
  return (
    <div className='fixed top-0 left-0 w-full h-[70px] text-lg font-semibold flex items-center justify-between px-10'>
      <div className='flex items-center gap-2'>
        <img src="src\assets\logo.png" alt="logo" width={30} className='roundeed-full'/>
        <h1>WorkX</h1>
      </div>

      <div className="flex items-center gap-5">
        <button>    Our Services    </button>
        <button>   Login     </button>   
      </div>
    </div>
  )
}

export default navbar
