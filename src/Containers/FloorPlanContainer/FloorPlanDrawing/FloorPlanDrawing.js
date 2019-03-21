import React from 'react';

export default function FloorPlanDrawing(props) {
    return (
        <div className='FloorPlanDrawing'>
            <img src= {props.drawing}
                className="purpose-group-FloorPlanDrawing-image"
                alt="purpose-group-FloorPlanDrawing" />
        </div>
    )
}