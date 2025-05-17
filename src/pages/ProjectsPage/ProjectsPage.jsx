import React from 'react'
import Navbar from '../../components/navBar/nav'
import Footer from '../../components/footer/footer'
import ComingSoon from './ComingSoon'


const ProjectsPage = () => {
  return (
    <div>
      <Navbar/>
      <main className="flex-grow w-full h-[100vh] overflow-auto ">
        <ComingSoon/>
        <Footer/>
      </main>
    </div>
  )
}

export default ProjectsPage
