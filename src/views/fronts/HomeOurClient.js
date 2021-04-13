import React from 'react'
import { Link } from 'react-router-dom'

const HomeOurClient = () => {
    return (
        <>

<section className="light_gray_bg">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-6 col-lg-8">
        <div className="text-center animation" data-animation="fadeInUp" data-animation-delay="0.01s">
          <div className="heading_s1 text-center">
            <h2>Our Client</h2>
          </div>
          <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
          <div className="small_divider" />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 animation" data-animation="fadeInUp" data-animation-delay="0.01s">
        <div className="cl_logo_slider carousel_slider owl-carousel owl-theme" data-margin={15} data-loop="true" data-autoplay="true" data-dots="false" data-responsive="{&quot;0&quot;:{&quot;items&quot;: &quot;2&quot;}, &quot;380&quot;:{&quot;items&quot;: &quot;3&quot;}, &quot;600&quot;:{&quot;items&quot;: &quot;4&quot;}, &quot;1000&quot;:{&quot;items&quot;: &quot;5&quot;}, &quot;1199&quot;:{&quot;items&quot;: &quot;6&quot;}}">
          <div className="item">
            <Link to="#"><img src="assets/images/cl_logo1.png" alt="cl_logo1" /></Link>
          </div>
          <div className="item">
            <Link to="#"><img src="assets/images/cl_logo2.png" alt="cl_logo2" /></Link>
          </div>
          <div className="item">
            <Link to="#"><img src="assets/images/cl_logo3.png" alt="cl_logo3" /></Link>
          </div>
          <div className="item">
            <Link to="#"><img src="assets/images/cl_logo4.png" alt="cl_logo4" /></Link>
          </div>
          <div className="item">
            <Link to="#"><img src="assets/images/cl_logo5.png" alt="cl_logo5" /></Link>
          </div>
          <div className="item">
            <Link to="#"><img src="assets/images/cl_logo2.png" alt="cl_logo2" /></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        </>
    )
}

export default HomeOurClient
