import React from 'react'
import whyChooseUs from '../../assets/images/whyChooseUs.png'

const WhyChooseUs = () => {
  return (
    <div className='flex p-4 justify-between'>
      <div>
        <img src={whyChooseUs} alt="" />
      </div>
      <div className='w-[50%] space-y-4 py-20'>
        <h3 className='text-[1.5rem] font-serif'> <span className='text-[#af0125] font-bold'> //</span> Why Choose Us ?</h3>
        <h2 className='text-[1.5rem] '> <span className='text-[#af0125] font-bold text-[1.5rem]'>ONE-STOP SOLUTION</span> FOR ALL ARTISAN needs</h2>
        <p className='font-mono'>Be rest assured, as a Customer, that we are here to ensure that you are in control of the engagement and that your experience is smooth, easy, and convenient as you work with competent Artisans. We are determined to ensure that you only deal with competent Service Providers</p>
        <div className='flex justify-around'> 
            <div>
                <p className='text-[4rem] font-bold'>800+</p>
                <p className='text-[1.5rem] font-semibold'>EXPERT ARTISANS</p>
            </div>
            <div>
            <p className='text-[4rem] font-bold'>800+</p>
            <p className='text-[1.5rem] font-semibold'>APP USERS</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
