import React from 'react'
import LeftSection from './leftSection'
import CenterSection from './centerSection'
import RightSection from './rightSection'
import Statistics from './statistics'


const LandingSection = () => {
  return (
    <>
    <div 
     className='flex justify-between border-2 border-info shadow-2x'>
      <LeftSection/>
      <CenterSection/>
      <RightSection/>
    </div>  
    <Statistics/>   
    </> 
  )
}

export default LandingSection
