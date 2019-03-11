import React from 'react'

import SearchResultsPanel from '../SearchResultsPanel/SearchResultsPanel'
import SearchResultsGoogleMap 
    from '../SearchResultsGoogleMap/SearchResultsGoogleMap'

import googlemapresult_image from './purpose-group-googlemapresult.png'

export default function SearchResultsContainer() {
    return (
        <div className='SearchResultsContainer'>
            <SearchResultsPanel />
            <SearchResultsGoogleMap
                googlemapresult_image = {googlemapresult_image} />
        </div>
    )
}