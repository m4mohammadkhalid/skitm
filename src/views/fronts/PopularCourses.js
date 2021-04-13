import React from 'react'
import { Link } from 'react-router-dom'

const PopularCourses = () => {
    return (
        <>

<div style={{backgroundColor:'#EDF9ED'}} className="our-course-categories-area section-ptb">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 ml-auto mr-auto">
        {/* section-title */}
        <div className="section-title-three">
          <h4>Our Course</h4>        
        </div>{/*// section-title */}
      </div>
    </div>
    <div className="row">
      <div className="col">
        <div className="course-categories-wrap">
         
          <div className="coustom-col-2">
            {/* single-course-categories */}
            <div className="single-course-categories sunglow">
              <div className="item-inner">
                <div className="cours-icon">
                  <img src="assets/images/btech.svg" alt="khalid" />
                </div>
                
              </div>
            </div>{/*// single-course-categories */}
          </div>
          
          <div className="coustom-col-2">
            {/* single-course-categories */}
            <div className="single-course-categories brilliantrose">
              <div className="item-inner">
                <div className="cours-icon">
                  {/* <img src="images/icon-04.png" alt="khalid" /> */}
                  <h1>M-Tech</h1>
                </div>
                {/* <div className="cours-title">
                  <h5>HTML &amp; CSS</h5>
                </div> */}
              </div>
            </div>{/*// single-course-categories */}
          </div>
          <div className="coustom-col-2">
            {/* single-course-categories */}
            <div className="single-course-categories shakespeare">
              <div className="item-inner">
                <div className="cours-icon">
                  {/* <img src="images/icon-05.png" alt="khalid" /> */}
                  <h1>B.Pharma</h1>
                </div>
                {/* <div className="cours-title">
                  <h5>Development</h5>
                </div> */}
              </div>
            </div>{/*// single-course-categories */}
          </div>
          <div className="coustom-col-2">
            {/* single-course-categories */}
            <div className="single-course-categories deyork">
              <div className="item-inner">
                <div className="cours-icon">
                  {/* <img src="images/icon-06.png" alt="khalid" /> */}
                  <h1>Course</h1>
                </div>
                {/* <div className="cours-title">
                  <h5>Flim &amp; Media</h5>
                </div> */}
              </div>
            </div>{/*// single-course-categories */}
          </div>
          <div className="all-course-btn">
            <Link to="/" className="all-course">all course</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



        </>
    )
}

export default PopularCourses
