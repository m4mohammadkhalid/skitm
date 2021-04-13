import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const HomeSlider = () => {
  return (
    <Carousel  verticalSwipe	={true} showArrows={true}  autoPlay={true}>
                <div>
                    <img src="assets/images/banner5.jpg" alt="khalid" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/images/banner11.jpg" alt="khalid" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/images/banner7.jpg" alt="khalid" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="assets/images/banner10.jpg" alt="khalid" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
  )
}

export default HomeSlider
