import React, { Component } from 'react';


import FloorPlanPanelText from '../FloorPlanPanelText/FloorPlanPanelText'

export default class FloorPlanPanel extends Component {
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


    render () {

        let Button_Media_class = this.state.Media ? "activeButton" : "passiveButton";
        let Button_Office_class = this.state.Office ? "activeButton" : "passiveButton";
        let Button_Open_class = this.state.Open ? "activeButton" : "passiveButton";  

        return (
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
                
            </div>
        )
    }
}