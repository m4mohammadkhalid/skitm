import React from 'react'
import { Link } from 'react-router-dom'

const HomeTraining = () => {
    return (
        <>

<section className="bg_default small_pt small_pb">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-8">
        <div className="text_white cta_section">
          <div className="medium_divider d-block d-md-none" />
          <div className="heading_s1 heading_light">
            <h2>Get The Coaching Training Today!</h2>
          </div>
          <p>If you are going to use a passage of embarrassing hidden in the middle of text</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="text-md-right">
          <Link to="#" className="btn btn-outline-white rounded-0">Get Started</Link>
        </div>
        <div className="medium_divider d-block d-md-none" />
      </div>
    </div>
  </div>
</section>


        </>
    )
}

export default HomeTraining
