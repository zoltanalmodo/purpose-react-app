import React, { Component } from 'react';

import FloorPlanPanelTitle from '../FloorPlanPanelTitle/FloorPlanPanelTitle'
import FloorPlanPanel from '../FloorPlanPanel/FloorPlanPanel'
import FloorPlanDrawing from '../FloorPlanDrawing/FloorPlanDrawing'

class App extends Component {
    render() {
        return (
            <div className='FloorPlanBlock'>
                <FloorPlanPanelTitle title = ''/>
                <FloorPlanPanel />
                <FloorPlanDrawing />
            </div>
        );
    }
}

export default App;