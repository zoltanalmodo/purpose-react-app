import React from 'react';

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import TopNav from './TopNav';
import image_001 from './images/home-slider-001.jpg';
import image_002 from './images/home-slider-002.jpg';
import image_003 from './images/home-slider-003.jpg';

export default function Home() {
  return (
    <div>
      <TopNav />
      <Gallery />
      <h1><br></br>HOME content + carousel</h1>
    </div>
  );
}

class Gallery extends React.Component {

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

//alice carousel = working

    return (
      <AliceCarousel
        duration={400}
        buttonsDisabled = {false}
        dotsDisabled = {true}
        autoPlay={true}
        stopAutoPlayOnHover={false}
        startIndex = {1}
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        playButtonEnabled={false}
        responsive={responsive}
        autoPlayInterval={2000}
        autoPlayDirection="ltr"
        autoPlayActionDisabled={true}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
      >
      
        <img src={image_001} onDragStart={handleOnDragStart} className="yours-custom-class" alt='img1'/>
        <img src={image_002} onDragStart={handleOnDragStart} className="yours-custom-class" alt='img2'/>
        <img src={image_003} onDragStart={handleOnDragStart} className="yours-custom-class" alt='img3'/>
      
      </AliceCarousel>
    );
  }
}