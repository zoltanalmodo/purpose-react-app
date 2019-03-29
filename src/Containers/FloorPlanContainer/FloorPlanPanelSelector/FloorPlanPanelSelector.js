import React, { Component } from 'react';


export default class FloorPlanPanelSelector extends Component {
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

  // handleClick = (event) => {
  //   accessible: event.target.style
  //   to change style via css : event.target.classList
  // }

  render(){
      let Button_Media_class = this.state.Media ? "activeButton" : "passiveButton";
      let Button_Office_class = this.state.Office ? "activeButton" : "passiveButton";
      let Button_Open_class = this.state.Open ? "activeButton" : "passiveButton";

      return (
        <div className='FloorPlanPanelSelector'>
            
            <div className={Button_Media_class} onClick={this.changeColor_1.bind(this)}>
                    <h1 className='SelectorButton'>Media</h1>
            </div>

            <div className={Button_Office_class} onClick={this.changeColor_2.bind(this)}>
                    <h1 className='SelectorButton'>Office</h1>
            </div>

            <div className={Button_Open_class} onClick={this.changeColor_3.bind(this)}>
                    <h1 className='SelectorButton'>Open</h1>
            </div>

        </div>
      )
  }
}