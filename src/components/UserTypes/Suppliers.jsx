import React from 'react'
import suppliers from '../../assets/images/suppliers.png'

const Suppliers = () => {
  return (
    <div className='flex flex-col items-center justify-center border-2 border-white shadow-2xl rounded-lg'>
       <div>
          <h2 className='text-[1.5rem]'> Suppliers</h2>
           <img src={suppliers} alt="" />
       </div>
       <div  className='text-start space-y-2 pl-3'>
           <h2>as a SUPPLIER, you get :</h2>
           <p>- more customers</p>
           <p>- more referalls </p>
           <p>- sales of your products in bulk quantities</p>
           <p>- access to contracts</p>
           <p>- Higher price band (as you prove yourself on the App)</p>
       </div>
     </div>
  )
}

export default Suppliers
