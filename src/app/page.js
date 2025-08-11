import React from 'react'
import Header from './components/Header'
import HeaderCoverSection from './components/HomeCoverSection'
import BlogItem from './components/BlogItem'
import Footer from './components/Footer'
import Latest from './components/Latest'
import Subscribe from './components/Subscribe'



const page = () => {
  return (
    <div>

      <HeaderCoverSection></HeaderCoverSection>
      <BlogItem></BlogItem>
      <Latest></Latest>
      <Subscribe></Subscribe>

     
    </div>
  )
}

export default page
