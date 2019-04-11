import React, { Component } from 'react';

import FloorPlanPanelTitle from './FloorPlanPanelTitle/FloorPlanPanelTitle'
import FloorPlanPanelText from './FloorPlanPanelText/FloorPlanPanelText'
import FloorPlanDrawing from './FloorPlanDrawing/FloorPlanDrawing'

class FloorPlanContainer extends Component {

    constructor(){
        super();
        this.state = {
          Media: true,
          Office: false,
          Open: false,
        }
    }
  
    changeColor_1(){
      this.setState({
        Media: true,
        Office: false,
        Open: false,
       })
    }
  
    changeColor_2(){
      this.setState({
        Media: false,
        Office: true,
        Open: false,
       })
    }
  
    changeColor_3(){
      this.setState({
        Media: false,
        Office: false,
        Open: true,
       })
    }

    render() {

        let Button_Media_class = this.state.Media ? "activeButton" : "passiveButton";
        let Button_Office_class = this.state.Office ? "activeButton" : "passiveButton";
        let Button_Open_class = this.state.Open ? "activeButton" : "passiveButton";
        
        let floor_plan_description_title_conditional =
            this.state.Media ? this.props.floor_plan_description_title_media
            : this.state.Office ? this.props.floor_plan_description_title_office
            : this.state.Open ? this.props.floor_plan_description_title_open
            : null;

        return (
            <div className='FloorPlanContainer'>

                <FloorPlanPanelTitle
                    title = {this.props.title}/>



            <div className='FloorPlanPanel'>
                
                <div className='FloorPlanPanelSelector'>
            
                    <div
                    className={Button_Media_class}
                    onClick={this.changeColor_1.bind(this)}
                    >
                    <h1 className='SelectorButton'>Media</h1>
                    </div>
        
                    <div
                    className={Button_Office_class}
                    onClick={this.changeColor_2.bind(this)}
                    >
                    <h1 className='SelectorButton'>Office</h1>
                    </div>
        
                    <div
                    className={Button_Open_class}
                    onClick={this.changeColor_3.bind(this)}
                    >
                    <h1 className='SelectorButton'>Open</h1>
                    </div>

                </div>

                <FloorPlanPanelText
                    floor_plan_description_title =
                        {floor_plan_description_title_conditional}
                    floor_plan_description =
                        {this.props.floor_plan_description}
                    floor_plan_more_description_title =
                        {this.props.floor_plan_more_description_title}
                    floor_plan_more_description =
                        {this.props.floor_plan_more_description}
                    floor_plan_price =
                        {this.props.floor_plan_price}
                />
                
            </div>

                <FloorPlanDrawing
                    drawing = {this.props.drawing}/>
{/* //// */}
            </div>
        );
    }
}

export default FloorPlanContainer;