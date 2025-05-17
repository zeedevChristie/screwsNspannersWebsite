import React from 'react'
import Navbar from '../../components/navBar/nav'
import BlogsAndVlogs from './BlogsAndVlogs'
import Footer from '../../components/footer/Footer'

const BlogsAndVlogsPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />

      <main className="flex-grow w-full overflow-auto bg-black text-white ">
        <BlogsAndVlogs />
        <Footer />
      </main>
    </div>
  )
}

export default BlogsAndVlogsPage
