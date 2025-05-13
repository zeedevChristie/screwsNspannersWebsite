import React from 'react'

const Statistics = () => {
  return (
    <div className='flex border-2 border-info shadow-2xl text-center gap-20 p-2 pl-32 bg-[#6c6c6c] ' >
      <div>
        <p className='text-[1.5rem] font-semibold'>Downloads</p>
        <p className='text-[2rem] font-bold text-white'>1000+</p>
      </div>
        <div>
          <p className='text-[1.5rem] font-semibold'>Service Providers</p>
          <p className='text-[2rem] font-bold text-white'>1000+</p>
        </div>
      <div>
        <p className='text-[1.5rem] font-semibold'>Customers</p>
        <p className='text-[2rem] font-bold text-white'>1000+</p>
      </div>
      <div>
        <p className='text-[1.5rem] font-semibold'>Partners</p>
        <p className='text-[2rem] font-bold text-white'>1000+</p>
      </div>
      <div>
        <p className='text-[1.5rem] font-semibold' >Suppliers</p>
        <p className='text-[2rem] font-bold text-white'>1000+</p>
      </div>
      {/* <div>
        <p className='text-[1.5rem] font-semibold' >Impacts</p>
        <p className='text-[2rem] font-bold text-white'>1000+</p>
      </div> */}
    </div>
  )
}

export default Statistics
