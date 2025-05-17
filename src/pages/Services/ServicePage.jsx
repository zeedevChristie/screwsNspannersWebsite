import React from 'react'
import Navbar from '../../components/navBar/nav'
import Footer from '../../components/footer/Footer'
import ServiceDelivery from './ServiceDelivery'

const ServicePage = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar/>
      <main className='flex-grow w-full overflow-auto'>
        <ServiceDelivery/>
        <Footer/>
      </main>
    </div>
  )
}

export default ServicePage
