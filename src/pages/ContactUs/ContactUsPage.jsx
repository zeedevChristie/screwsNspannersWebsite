import React from 'react'
import Navbar from '../../components/navBar/nav'
import ContactUs from './ContactUs'
import Footer from '../../components/footer/footer'

const ContactUsPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar/>
      <main className='flex-grow w-full  overflow-auto '>
      <ContactUs/>
      <Footer/>
      </main>
    </div>
  )
}

export default ContactUsPage
