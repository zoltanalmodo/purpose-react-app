import React from 'react';

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

export default class Gallery002 extends React.Component {

    render() {
      const responsive = {
        0: {
          items: 2
        },
        600: {
          items: 2
        },
        1024: {
          items: 2
        }
      };
  
      const handleOnDragStart = e => e.preventDefault()
  
  //alice carousel = parameters
  
      return (
        <AliceCarousel
          duration={400}
          buttonsDisabled = {true}
          dotsDisabled = {true}
          autoPlay={true}
          stopAutoPlayOnHover={true}
          startIndex = {1}
          fadeOutAnimation={false}
          mouseDragEnabled={true}
          playButtonEnabled={false}
          responsive={responsive}
          autoPlayInterval={6000}
          autoPlayDirection="ltr"
          autoPlayActionDisabled={true}
          onSlideChange={this.onSlideChange}
          onSlideChanged={this.onSlideChanged}
        >
  
          <img src={this.props.image_001}
            onDragStart={handleOnDragStart} className="Gallery002" alt='img1'/>
          <img src={this.props.image_002}
            onDragStart={handleOnDragStart} className="Gallery002" alt='img2'/>
          <img src={this.props.image_003}
            onDragStart={handleOnDragStart} className="Gallery002" alt='img3'/>
          <img src={this.props.image_004}
            onDragStart={handleOnDragStart} className="Gallery002" alt='img4'/>
          <img src={this.props.image_005}
            onDragStart={handleOnDragStart} className="Gallery002" alt='img5'/>
          <img src={this.props.image_006}
            onDragStart={handleOnDragStart} className="Gallery002" alt='img6'/>
  
        </AliceCarousel>
      );
    }
  }