import React from 'react';

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import image_001 from './images/purpose-building-001-001.png';
import image_002 from './images/purpose-building-001-002.png';
import image_003 from './images/purpose-building-001-003.png';
import image_004 from './images/purpose-building-001-004.png';
import image_005 from './images/purpose-building-001-005.png';
import image_006 from './images/purpose-building-001-006.png';


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
  
          <img src={image_001} onDragStart={handleOnDragStart} className="Gallery002" alt='img1'/>
          <img src={image_002} onDragStart={handleOnDragStart} className="Gallery002" alt='img2'/>
          <img src={image_003} onDragStart={handleOnDragStart} className="Gallery002" alt='img3'/>
          <img src={image_004} onDragStart={handleOnDragStart} className="Gallery002" alt='img4'/>
          <img src={image_005} onDragStart={handleOnDragStart} className="Gallery002" alt='img5'/>
          <img src={image_006} onDragStart={handleOnDragStart} className="Gallery002" alt='img6'/>
  
        </AliceCarousel>
      );
    }
  }