import React from 'react';

import googlemapsearch_image from './purpose-group-googlemapsearch.png'

export default function GoogleMapSearch() {
    return (
        <div className='GoogleMapSearch'>
            <img src={googlemapsearch_image}
                className="purpose-group-googlemapsearch-image"
                alt="purpose-group-googlemapsearch" />
        </div>
    )
}