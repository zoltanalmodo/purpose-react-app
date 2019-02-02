import React from 'react'

import TopNav from '../TopNav/TopNav'
import Gallery001 from '../Gallery001/Gallery001'
import Footer from '../Footer/Footer'
import Copyright from '../Copyright/Copyright'


export default function Home() {
  return (
    <div>
      <TopNav />
      <Gallery001 />

      <Footer />
      <Copyright />
    </div>
  )
}