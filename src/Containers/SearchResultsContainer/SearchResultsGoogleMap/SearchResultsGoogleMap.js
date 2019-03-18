import React from 'react';

export default function SearchResultsGoogleMap(props) {
    return (
        <div className='GoogleMapResult'>
            <img src={props.googlemapresult_image}
                className="purpose-group-googlemapresult-image"
                alt="purpose-group-googlemapresult" />
        </div>
    )
}