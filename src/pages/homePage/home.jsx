import React from 'react'
import Navbar from '../../components/navBar/nav'
// import Carousel from '../../components/carousel/carousel'
// import Feature from '../../components/feature/feature'
// import Services from '../../components/services/services'
// import Faq from '../../components/accordion/accordion'
// import LandingSection from '../../components/landingSection/landingSection'
// import HowToImagesSection from '../../components/howToSection/howToImagesSection'
// import Welcome from '../../components/welcome/welcome'
// import OurUsers from '../../components/UserTypes/OurUsers'
// import WhyChooseUs from '../../components/whyChooseUs/whyChooseUs'
import Statistics from '../../components/landingSection/statistics'
import Footer from '../../components/footer/footer'
import WelcomeCarousel from '../../components/welcome/welcomeCarousel'
// import HowToVideos from '../../components/howToSection/howToVideos'
// import HowToText from '../../components/howToSection/HowToText'
import HowToSection from '../../components/howToSection/howToSection'


const Home = () => {
  return (
    <div className=''>
      <Navbar/>
      <div className='h-[87vh] overflow-auto'>
        {/* <Welcome/> */}
        <WelcomeCarousel/>
    {/* <HowToImagesSection/>   */}
    <Statistics/>                       
        {/* <OurUsers/> */}
    {/* <LandingSection/> */}
    {/* <WhyChooseUs/> */}
      {/* <Feature/>   */}
      {/* <Services/> */}
      {/* <Faq/> */}
     <HowToSection/>
      <Footer/>
      </div>
    </div>
  )
}

export default Home
