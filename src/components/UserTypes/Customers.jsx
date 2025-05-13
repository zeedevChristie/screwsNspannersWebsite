import React from 'react'
import convenience from '../../assets/images/convenience.png'

const Customers = () => {
  return (
    <div className='flex flex-col items-center justify-center border-2 border-white shadow-2xl rounded-lg'>
    <div>
       <h2 className='text-[1.5rem]'> Customers</h2>
        <img src={convenience} alt="" />
    </div>
    <div  className='text-start space-y-2 pl-3'>
        <h2>as a CUSTOMER, you get :</h2>
        <p>- Convenience</p>
        <p>- Easy Access</p>
        <p>- Quality Service</p>
        <p>- Better traceability of Service Providers</p>
        <p>- improved behaviour of service providers through feedbacks</p>
    </div>
  </div>
  )
}

export default Customers
