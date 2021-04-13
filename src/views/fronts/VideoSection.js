import React from 'react'
import { Link } from 'react-router-dom'

const VideoSection = () => {
    return (
        <>
<div className="video-area overlay-video bg-common-style" style={{backgroundImage: 'url("assets/images/banner1.jpg")'}}>
  <div className="container">
    <div className="video-content">
      <h2 className="video-title">Watch Campus Life Video Tour</h2>
      <p className="video-sub-title">Vmply dummy text of the printing and typesetting industryorem
        <br />Ipsum industry's standard dum an unknowramble.</p>
      <Link className="play-btn popup-youtube wow bounceInUp" data-wow-duration="2s" data-wow-delay=".1s" to="http://www.youtube.com/watch?v=1iIZeIy7TqM"><i className="fa fa-play" aria-hidden="true" /></Link>
    </div>
  </div>
</div>

 
        </>
    )
}

export default VideoSection
