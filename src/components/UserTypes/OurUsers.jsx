import React from 'react'
import ServiceProvider from './ServiceProvider'
import Customers from './Customers'
import Suppliers from './Suppliers'

const OurUsers = () => {
  return (
   <div className='text-center p-4 bg-[#c1dce5] ' >
   <h2 className='text-[2rem] font-bold'>OUR USERS</h2>
    <div className='grid grid-cols-3 gap-10 p-4'>
      <ServiceProvider/>
      <Customers/>
      <Suppliers/>
    </div>
   </div>
  )
}

export default OurUsers
