import React from 'react';


import FloorPlanPanelSelector from '../FloorPlanPanelSelector/FloorPlanPanelSelector'
import FloorPlanPanelText from '../FloorPlanPanelText/FloorPlanPanelText'

export default function FloorPlanPanel() {
    return (
        <div className='FloorPlanPanel'>
            
            <FloorPlanPanelSelector />
            <FloorPlanPanelText />
            
        </div>
    )
}