import React from 'react';

const Statistics = () => {
  return (
    <div className='flex flex-wrap justify-center md:justify-between border-2 border-info shadow-2xl text-center gap-6 md:gap-20 p-4 md:p-8 bg-[#6c6c6c]'>
      <div className="w-1/2 md:w-auto">
        <p className='text-base md:text-[1.5rem] font-semibold'>Downloads</p>
        <p className='text-lg md:text-[2rem] font-bold text-white'>1000+</p>
      </div>
      <div className="w-1/2 md:w-auto">
        <p className='text-base md:text-[1.5rem] font-semibold'>Service Providers</p>
        <p className='text-lg md:text-[2rem] font-bold text-white'>1000+</p>
      </div>
      <div className="w-1/2 md:w-auto">
        <p className='text-base md:text-[1.5rem] font-semibold'>Customers</p>
        <p className='text-lg md:text-[2rem] font-bold text-white'>1000+</p>
      </div>
      <div className="w-1/2 md:w-auto">
        <p className='text-base md:text-[1.5rem] font-semibold'>Partners</p>
        <p className='text-lg md:text-[2rem] font-bold text-white'>1000+</p>
      </div>
      <div className="w-1/2 md:w-auto">
        <p className='text-base md:text-[1.5rem] font-semibold'>Suppliers</p>
        <p className='text-lg md:text-[2rem] font-bold text-white'>1000+</p>
      </div>
    </div>
  );
};

export default Statistics;
