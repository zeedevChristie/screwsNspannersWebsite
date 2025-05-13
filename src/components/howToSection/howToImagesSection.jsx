import React from 'react'
import welcomeLogIn from "../../assets/howToImages/welcomeLogIn.png"
import homePage from "../../assets/howToImages/homePage.png"
import srPage from "../../assets/howToImages/srPage.png"
import addressPage from "../../assets/howToImages/addressPage.png"
import requestSubmitted from "../../assets/howToImages/requestSubmitted.png"

const HowToImagesSection = () => {
  return (

    <div className=' bg-black text-white p-4 space-y-4 text-center text-[1.5rem]'> 
    <h2>How To Use The App ?</h2>
    <div className='grid grid-cols-5 px-4 h-[80vh]'>
      <div >
        <img className='h-[70vh] w-[90%]' src={welcomeLogIn} alt="welcomeLogin" />
      </div>
      <div>
        <img className='h-[70vh] w-[90%]' src={homePage} alt="homePage" />
      </div>
      <div  >
        <img className='h-[70vh] w-[90%]' src={srPage} alt="srPage" />
      </div>
      <div>
        <img className='h-[70vh] w-[90%]' src={addressPage} alt="" />
      </div>
      <div>
        <img className='h-[70vh] w-[90%]' src={requestSubmitted} alt="" />
      </div>
    </div>
    </div> 
  )
}

export default HowToImagesSection
