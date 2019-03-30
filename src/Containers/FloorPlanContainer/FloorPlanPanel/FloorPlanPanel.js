import React from 'react';


import FloorPlanPanelSelector from '../FloorPlanPanelSelector/FloorPlanPanelSelector'
import FloorPlanPanelText from '../FloorPlanPanelText/FloorPlanPanelText'

export default function FloorPlanPanel(props) {
    return (
        <div className='FloorPlanPanel'>
            
            <FloorPlanPanelSelector 
                />

            <FloorPlanPanelText
                floor_plan_description_title = {props.floor_plan_description_title}
                floor_plan_description = {props.floor_plan_description}
                floor_plan_more_description_title =
                    {props.floor_plan_more_description_title}
                floor_plan_more_description = 
                    {props.floor_plan_more_description}
                floor_plan_price = {props.floor_plan_price}
            />
            
        </div>
    )
}