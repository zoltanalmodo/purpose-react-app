import React from 'react'

import TopNav from '../TopNav/TopNav'
import HomeGallery from './HomeGallery/HomeGallery'

import SearchOnGoogleMapContainer
  from '../SearchOnGoogleMapContainer/SearchOnGoogleMapContainer'
import SearchResultsContainer
  from '../SearchResultsContainer/SearcResultsContainer'
import SearchResultsGallery
  from '../SearchResultsGallery/SearchResultsGallery'
import FloorPlanContainer
  from '../FloorPlanContainer/FloorPlanContainer'

import Footer from '../Footer/Footer'
import Copyright from '../Copyright/Copyright'


export default function Home() {
  return (
    <div>
      <TopNav />
      <HomeGallery />

      <SearchOnGoogleMapContainer />

      <SearchResultsContainer />
        <SearchResultsGallery />
        <FloorPlanContainer />
      
      <Footer />
      <Copyright />
    </div>
  )
}