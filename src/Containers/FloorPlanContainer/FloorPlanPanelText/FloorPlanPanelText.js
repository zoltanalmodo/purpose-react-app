import React from 'react';


export default function FloorPlanPanelText(props) {
    return (
        <div className='FloorPlanPanelText'>
            <p>
                {props.floor_plan_description_title}<br></br>
                <br></br>
                <br></br>
                {props.floor_plan_description}<br></br>
                <br></br>
                <br></br>
                {props.floor_plan_more_description_title}<br></br>
                <br></br>
                <br></br>
                {props.floor_plan_more_description}
            </p>
            <div className='FloorPlanPanelPrice'>
                <h1>{props.floor_plan_price}</h1>
            </div>
        </div>
    )
}