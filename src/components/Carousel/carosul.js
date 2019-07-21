import React from 'react';
import { Fade } from 'react-slideshow-image';

const fadeImages = [
  'https://assets-cdn.stylori.com/120x120/images/product/SE0218/SE0218-1Y.jpg',
  'https://assets-cdn.stylori.com/120x120/images/product/SE0464/SE0464-1Y.jpg',
  'https://assets-cdn.stylori.com/120x120/images/product/SR0986/SR0986-1Y.jpg'
];

const fadeProperties = {
  duration: 2000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}

const Slideshow = () => {
  return (
    <Fade {...fadeProperties}>
      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[0]}/>
        </div>

      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[1]} />
        </div>

      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[2]} />
        </div>

      </div>
    </Fade>
  )
}
export default Slideshow;