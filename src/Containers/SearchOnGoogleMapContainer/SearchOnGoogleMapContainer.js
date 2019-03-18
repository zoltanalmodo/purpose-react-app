import React from 'react';

import SearchPanel from './SearchPanel/SearchPanel';
import GoogleMapSearch from './GoogleMapSearch/GoogleMapSearch'

export default function SearchOnGoogleMapContainer() {
    return (
        <div className='SearchOnGoogleMapContainer'>
            <SearchPanel />
            <GoogleMapSearch />
        </div>
    )
}