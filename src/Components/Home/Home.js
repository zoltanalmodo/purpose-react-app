import React from 'react'

import TopNav from '../TopNav/TopNav'
import Gallery001 from '../Gallery001/Gallery001'

import SearchOnGoogleMap from '../SearchOnGoogleMap/SearchOnGoogleMap'
import SearchResults from '../SearchResults/SearcResults'
import Gallery002 from '../Gallery002/Gallery002'
import FloorPlanBlock from '../FloorPlanBlock/FloorPlanBlock'

import Footer from '../Footer/Footer'
import Copyright from '../Copyright/Copyright'


export default function Home() {
  return (
    <div>
      <TopNav />
      <Gallery001 />
      <SearchOnGoogleMap />
      <SearchResults />
      <Gallery002 />

      <FloorPlanBlock />
      
      <Footer />
      <Copyright />
    </div>
  )
}