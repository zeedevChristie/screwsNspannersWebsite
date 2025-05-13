import React from 'react'
import carpenter from '../../assets/images/carpenter.png'

const ServiceProvider = () => {
return (
    <div className='flex flex-col items-center justify-center border-2 border-white shadow-2xl rounded-lg'>
        <div className=''> 
           <h2 className='text-[1.5rem]'> Service Providers</h2>
            <img src={carpenter} alt="" />
        </div>
        <div className='text-start space-y-2 pl-3'>
            <h2>as a SERVICE PROVIDER, you have access to :</h2>
            <p>- More Customers </p>
            <p>- More Money</p>
            <p>- Zero Registration Fee</p>
            <p>- No Commission / Charges on your income</p>
            <p>- Higher price band (as you prove yourself on the App)</p>   
        </div>
    </div>
)
}

export default ServiceProvider
