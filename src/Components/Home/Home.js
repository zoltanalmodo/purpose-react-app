import React from 'react'

import TopNav from '../TopNav/TopNav'
import HomeGallery from './HomeGallery/HomeGallery'

import SearchOnGoogleMapContainer
  from '../../Containers/SearchOnGoogleMapContainer/SearchOnGoogleMapContainer'
import SearchResultsContainer
  from '../../Containers/SearchResultsContainer/SearcResultsContainer'


import Footer from '../Footer/Footer'
import Copyright from '../Copyright/Copyright'


export default function Home() {
  return (
    <div>
      <TopNav />
      <HomeGallery />

      <SearchOnGoogleMapContainer />

      <SearchResultsContainer />
              
      <Footer />
      <Copyright />
    </div>
  )
}