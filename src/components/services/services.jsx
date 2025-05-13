 import React from 'react'
 import carpenter from "../../assets/images/carpenter.png"
 import plumber from "../../assets/images/plumber.png"
 import solar from "../../assets/images/solar.png"
 import hairdresser from "../../assets/images/hairdresser.png"
 import electrician from "../../assets/images/electrician.png"
 import mechanic from "../../assets/images/mechanic.png"
 
 const Services = () => {
   return (
     <div className='flex-col justify-items-center text-white bg-black ' >
       <p className='text-[2.5rem] font-semibold'>Our Best Services</p>
       <p className='text-[1.5rem] font-medium'>Screws and Spanners is a marketplace for all qualified professional artisans.</p>
       <div className='grid grid-cols-3 gap-4 p-4 '>
        <div>
            <img src={mechanic} alt="mechanic" />
            <p></p>
        </div>
        <div>
            <img src={plumber} alt="plumber" />
            <p></p>
        </div>
        <div>
            <img src={electrician} alt="electrican" />
            <p></p>
        </div>
        <div>
            <img src={hairdresser} alt="hairdresser" />
            <p></p>
        </div>
        <div>
            <img src={solar} alt="solar" />
            <p></p>
        </div>
        <div>
            <img className='w-full h-[16.4rem]' src={carpenter} alt="carpenter" />
            <p></p>
        </div>
       </div>
     </div>
   )
 }
 
 export default Services
 