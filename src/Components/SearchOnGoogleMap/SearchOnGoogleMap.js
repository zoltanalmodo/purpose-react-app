import React from 'react';

import SearchPanel from '../SearchPanel/SearchPanel';
import GoogleMapSearch from '../GoogleMapSearch/GoogleMapSearch'

export default function SearchOnGoogleMap() {
    return (
        <div className='SearchOnGoogleMap'>
            <SearchPanel />
            <GoogleMapSearch />
        </div>
    )
}