import React from 'react'

import SearchResultsPanel from '../SearchResultsPanel/SearchResultsPanel'
import GoogleMapResult from '../GoogleMapResult/GoogleMapResult'


export default function SearchResults() {
    return (
        <div className='SearchResults'>
            <SearchResultsPanel />
            <GoogleMapResult />
        </div>
    )
}