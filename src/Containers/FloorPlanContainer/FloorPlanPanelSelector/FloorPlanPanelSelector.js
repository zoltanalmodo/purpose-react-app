import React, { Component } from 'react';

export default class FloorPlanPanelSelector extends Component {
  constructor(){
      super();
      this.state = {
        Button_1: true,
        Button_2: false,
        Button_3: false,
      }
  }

  changeColor_1(){
     this.setState({Button_1: true})
     this.setState({Button_2: false})
     this.setState({Button_3: false})
  }
  changeColor_2(){
    this.setState({Button_1: false})
    this.setState({Button_2: true})
    this.setState({Button_3: false})
  }
  changeColor_3(){
    this.setState({Button_1: false})
    this.setState({Button_2: false})
    this.setState({Button_3: true})
  }

  // handleClick = (event) => {
  //   // accessible: event.target.style
  //   //to change style via css : event.target.classList
  // }
 

  render(){
      let Button_1_class = this.state.Button_1 ? "activeButton" : "passiveButton";
      let Button_2_class = this.state.Button_2 ? "activeButton" : "passiveButton";
      let Button_3_class = this.state.Button_3 ? "activeButton" : "passiveButton";

      return (
        <div className='FloorPlanPanelSelector'>
            

            <div className={Button_1_class} onClick={this.changeColor_1.bind(this)}>
                    <h1 className='SelectorButton' >Media</h1>
            </div>
            <div className={Button_2_class} onClick={this.changeColor_2.bind(this)}>
                    <h1 className='SelectorButton' >Office</h1>
            </div>
            <div className={Button_3_class} onClick={this.changeColor_3.bind(this)}>
                    <h1 className='SelectorButton' >Open</h1>
            </div>

            
        </div>
      )
  }
}