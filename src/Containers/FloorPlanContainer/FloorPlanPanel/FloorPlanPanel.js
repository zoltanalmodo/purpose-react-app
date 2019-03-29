import React from 'react';


import FloorPlanPanelSelector from '../FloorPlanPanelSelector/FloorPlanPanelSelector'
import FloorPlanPanelText from '../FloorPlanPanelText/FloorPlanPanelText'

export default function FloorPlanPanel(props) {
    return (
        <div className='FloorPlanPanel'>
            
            <FloorPlanPanelSelector 
                />

            <FloorPlanPanelText
                description = {props.floor_plan_description}/>
            
        </div>
    )
}