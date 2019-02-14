import React from 'react';

import FloorPlanDrawing_image from './purpose-group-FloorPlanDrawing.png'


export default function FloorPlanDrawing() {
    return (
        <div className='FloorPlanDrawing'>
            <img src={FloorPlanDrawing_image}
                className="purpose-group-FloorPlanDrawing-image"
                alt="purpose-group-FloorPlanDrawing" />
        </div>
    )
}