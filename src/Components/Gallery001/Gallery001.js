import React from 'react';

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import image_001 from './images/home-slider-001.jpg';
import image_002 from './images/home-slider-002.jpg';
import image_003 from './images/home-slider-003.jpg';
import image_004 from './images/home-slider-004.jpg';


export default class Gallery001 extends React.Component {

    render() {
      const responsive = {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1024: {
          items: 1
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
  
          <img src={image_001} onDragStart={handleOnDragStart} className="Gallery001" alt='img1'/>
          <img src={image_002} onDragStart={handleOnDragStart} className="Gallery001" alt='img2'/>
          <img src={image_003} onDragStart={handleOnDragStart} className="Gallery001" alt='img3'/>
          <img src={image_004} onDragStart={handleOnDragStart} className="Gallery001" alt='img4'/>
  
        </AliceCarousel>
      );
    }
  }