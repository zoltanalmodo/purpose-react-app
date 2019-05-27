import React, { Component } from 'react';

import FloorPlanPanelTitle from './FloorPlanPanelTitle/FloorPlanPanelTitle'
import FloorPlanPanelText from './FloorPlanPanelText/FloorPlanPanelText'
import FloorPlanDrawing from './FloorPlanDrawing/FloorPlanDrawing'

class FloorPlanContainer extends Component {

    constructor(){
        super();
        this.state = {
          media: true,
          office: false,
          open: false,
          selectedPlanType: 'media'
        }
    }

    selectFloorPlan(planType) {
        this.setState({selectedPlanType: planType})
    }
  
    changeColor_1(){
      this.setState({
        media: true,
        office: false,
        open: false,
       })
    }
  
    changeColor_2(){
      this.setState({
        media: false,
        office: true,
        open: false,
       })
    }
  
    changeColor_3(){
      this.setState({
        media: false,
        office: false,
        open: true,
       })
    }

    render() {

        let button_media_class =
            this.state.media ? "activeButton" : "passiveButton"
        let button_office_class =
            this.state.office ? "activeButton" : "passiveButton"
        let button_open_class =
            this.state.open ? "activeButton" : "passiveButton"
        
            //.....comment

        let floor_plan_description_title_conditional =
            this.state.media ? this.props.floor_plan_description_title_media
            : this.state.office ? this.props.floor_plan_description_title_office
            : this.state.open ? this.props.floor_plan_description_title_open
            : null

        // let floor_plan_description_title = this.props[`floor_plan_description_${this.state.selectedPanel}`]
        let floor_plan_description_conditional =
            this.state.media ? this.props.floor_plan_description_media
            : this.state.office ? this.props.floor_plan_description_office
            : this.state.open ? this.props.floor_plan_description_open
            : null
        
        let floor_plan_more_description_title_conditional =
            this.state.media ? this.props.floor_plan_more_description_title_media
            : this.state.office ? this.props.floor_plan_more_description_title_office
            : this.state.open ? this.props.floor_plan_more_description_title_open
            : null
        
        let floor_plan_more_description_conditional =
            this.state.media ? this.props.floor_plan_more_description_media
            : this.state.office ? this.props.floor_plan_more_description_office
            : this.state.open ? this.props.floor_plan_more_description_open
            : null

        let floor_plan_price_conditional =
            this.state.media ? this.props.floor_plan_price_media
            : this.state.office ? this.props.floor_plan_price_office
            : this.state.open ? this.props.floor_plan_price_open
            : null

        let drawing_conditional = 
            this.state.media ? this.props.drawing_media
            : this.state.office ? this.props.drawing_office
            : this.state.open ? this.props.drawing_open
            : null


        return (
            <div className='FloorPlanContainer'>

                <FloorPlanPanelTitle
                    title = {this.props.title}/>

            <div className='FloorPlanPanel'>
                
                <div className='FloorPlanPanelSelector'>
            
                    <div
                    className={button_media_class}
                    onClick={this.changeColor_1.bind(this)}
                    >
                    <h1 className='SelectorButton'>Media</h1>
                    </div>
        
                    <div
                    className={button_office_class}
                    onClick={this.changeColor_2.bind(this)}
                    >
                    <h1 className='SelectorButton'>Office</h1>
                    </div>
        
                    <div
                    className={button_open_class}
                    onClick={this.changeColor_3.bind(this)}
                    >
                    <h1 className='SelectorButton'>Open</h1>
                    </div>

                </div>

                <FloorPlanPanelText
                    floor_plan_description_title =
                        {floor_plan_description_title_conditional}
                    floor_plan_description =
                        {floor_plan_description_conditional}
                    floor_plan_more_description_title =
                        {floor_plan_more_description_title_conditional}
                    floor_plan_more_description =
                        {floor_plan_more_description_conditional}
                    floor_plan_price =
                        {floor_plan_price_conditional}
                />
                
                

            </div>

                <FloorPlanDrawing
                    drawing = {drawing_conditional}/>
                    
            </div>
        );
    }
}

const FloorPlanPanelSelector = ({selectedPlanType, selectFloorPlan}) => (
    <div className='FloorPlanPanelSelector'>
        {['media', 'office', 'open'].map((panel, index) =>
            <PanelSelectButton
                key={index}
                panel={panel}
                selectedPlanType={selectedPlanType}
                selectFloorPlan={() => selectFloorPlan(panel)}
            />)
        }
    </div>
)

const PanelSelectButton = ({panel, selectedFloorPlan, selectFloorPlan}) =>
    <button className={`panel-select-button ${selectedFloorPlan === panel ? 'active' : ''}`}>{panel}</button>

export default FloorPlanContainer;