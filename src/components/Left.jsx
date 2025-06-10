import React from 'react'

const Left = () => {
  return (
    <div className='flex items-center justify-center bg-gray-50   w-3xl pt-15 mt-20 h-[500px]'>
      <div className="bg-gray-100 shadow-custom-black rounded-xs w-[400px] h-[300px] px-8 py-6 font-Item flex flex-col justify-center ">
         <h2 className="text-black text-left">
          Hello, my name is <span className="text-amber-200">Aziza</span>
          <br />
          This is the day <span className="text-amber-200">12.12.2024</span>
          <br />
          A random number from 0 to 100:
        </h2>
        <p className="text-black font-bold text-6xl pt-6 flex justify-center  text-center">77</p>
      </div>
    </div>
  )
}

export default Left