import React, { Component } from 'react';

import FloorPlanPanelTitle from './FloorPlanPanelTitle/FloorPlanPanelTitle'
import FloorPlanPanel from './FloorPlanPanel/FloorPlanPanel'
import FloorPlanDrawing from './FloorPlanDrawing/FloorPlanDrawing'

class App extends Component {

    render() {
        return (
            <div className='FloorPlanContainer'>

                <FloorPlanPanelTitle
                    title = {this.props.title}/>

                <FloorPlanPanel
                    floor_plan_description_title =
                        {this.props.floor_plan_description_title}
                    floor_plan_description =
                        {this.props.floor_plan_description}
                    floor_plan_more_description_title = 
                        {this.props.floor_plan_more_description_title}
                    floor_plan_more_description = 
                        {this.props.floor_plan_more_description}
                    floor_plan_price =
                        {this.props.floor_plan_price}
                />

                <FloorPlanDrawing
                    drawing = {this.props.drawing}/>

            </div>
        );
    }
}

export default App;