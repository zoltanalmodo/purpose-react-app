import React from 'react';

import FloorPlanPanelTitle from '../FloorPlanPanelTitle/FloorPlanPanelTitle'
import FloorPlanPanel from '../FloorPlanPanel/FloorPlanPanel'
import FloorPlanDrawing from '../FloorPlanDrawing/FloorPlanDrawing'

export default function FloorPlanBlock() {
    return (
        <div className='FloorPlanBlock'>
            <FloorPlanPanelTitle title='Bethnal Green'/>
            <FloorPlanPanel />
            <FloorPlanDrawing />
        </div>
    )
}