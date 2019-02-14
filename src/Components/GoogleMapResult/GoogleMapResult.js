import React from 'react';

import googlemapresult_image from './purpose-group-googlemapresult.png'

export default function GoogleMapResult() {
    return (
        <div className='GoogleMapResult'>
            <img src={googlemapresult_image}
                className="purpose-group-googlemapresult-image"
                alt="purpose-group-googlemapresult" />
        </div>
    )
}