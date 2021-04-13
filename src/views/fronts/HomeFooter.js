import React from 'react'
import { Link } from 'react-router-dom'

const HomeFooter = () => {
    return (
       <>
<footer id="rs-footer" className="bg3 rs-footer">
  <div className="container">
    {/* Footer Address */}
    <div>
      <div className="row footer-contact-desc">
        <div className="col-md-4">
          <div className="contact-inner">
            <i className="fa fa-map-marker" />
            <h4 className="contact-title">Address</h4>
            <p className="contact-desc">
              Palam New Delhi
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="contact-inner">
            <i className="fa fa-phone" />
            <h4 className="contact-title">Phone Number</h4>
            <p className="contact-desc">
              +91 9102603030
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="contact-inner">
            <i className="fa fa-map-marker" />
            <h4 className="contact-title">Email Address</h4>
            <p className="contact-desc">
              m4mohammadkhalid@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer Top */}
  <div className="footer-top">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-12">
          <div className="about-widget">
            {/* <img src="images/logo-footer.png" alt="Footer Logo" /> */}
            <h1 style={{color:'white'}}>Sat Kabir Institute</h1>
            <p>We create Premium Html Themes for more than three years. Our team goal is to reunite the elegance of unique.</p>
            <p className="margin-remove">We create Unique and Easy To Use Flexible Html Themes.</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-12">
          <h5 className="footer-title">RECENT POSTS</h5>
          <div className="recent-post-widget">
            <div className="post-item">
              <div className="post-date">
                <span>28</span>
                <span>June</span>
              </div>
              <div className="post-desc">
                <h5 className="post-title"><Link to="#">While the lovely valley team work</Link></h5>
                <span className="post-category">Keyword Analysis</span>
              </div>
            </div>
            <div className="post-item">
              <div className="post-date">
                <span>28</span>
                <span>June</span>
              </div>
              <div className="post-desc">
                <h5 className="post-title"><Link to="#">I must explain to you how all this idea</Link></h5>
                <span className="post-category">Spoken English</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-12">
          <h5 className="footer-title">OUR SITEMAP</h5>
          <ul className="sitemap-widget">
            <li className="active"><Link to="index.html"><i className="fa fa-angle-right" aria-hidden="true" />Home</Link></li>
            <li><Link to="about.html"><i className="fa fa-angle-right" aria-hidden="true" />About</Link></li>
            <li><Link to="courses.html"><i className="fa fa-angle-right" aria-hidden="true" />Courses</Link></li>
            <li><Link to="courses-details.html"><i className="fa fa-angle-right" aria-hidden="true" />Courses Details</Link></li>
            <li><Link to="events.html"><i className="fa fa-angle-right" aria-hidden="true" />Events</Link></li>
            <li><Link to="events-details.html"><i className="fa fa-angle-right" aria-hidden="true" />Events Details</Link></li>
            <li><Link to="blog.html"><i className="fa fa-angle-right" aria-hidden="true" />Blog</Link></li>
            <li><Link to="blog-details.html"><i className="fa fa-angle-right" aria-hidden="true" />Blog Details</Link></li>
            <li><Link to="teachers.html"><i className="fa fa-angle-right" aria-hidden="true" />Teachers</Link></li>
            <li><Link to="teachers-single.html"><i className="fa fa-angle-right" aria-hidden="true" />Teachers</Link></li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-12">
          <h3 className="footer-title">FLICKR FEED</h3>
          <ul className="flickr-feed">
            <li><Link to="#"><img src="assets/images/banner5.jpg" alt="khalid" /></Link></li>
            <li><Link to="#"><img src="assets/images/banner6.jpg" alt="khalid" /></Link></li>
            <li><Link to="#"><img src="assets/images/banner7.jpg" alt="khalid" /></Link></li>
            <li><Link to="#"><img src="assets/images/banner8.jpg" alt="khalid" /></Link></li>
            <li><Link to="#"><img src="assets/images/banner4.jpg" alt="khalid" /></Link></li>
            <li><Link to="#"><img src="assets/images/banner2.jpg" alt="khalid" /></Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-share">
        <ul>
          <li><Link to="#"><i className="fa fa-facebook" /></Link></li>
          <li><Link to="#"><i className="fa fa-google-plus" /></Link></li>
          <li><Link to="#"><i className="fa fa-twitter" /></Link></li>
          <li><Link to="#"><i className="fa fa-pinterest-p" /></Link></li>
          <li><Link to="#"><i className="fa fa-vimeo" /></Link></li>
        </ul>
      </div>
    </div>
  </div>
  {/* Footer Bottom */}
  <div className="footer-bottom">
    <div className="container">
      <div className="copyright">
        <p>© 2021 <Link to="#">Code Sparrow</Link>. All Rights Reserved.</p>
      </div>
    </div>
  </div>
</footer>

       </>
    )
}

export default HomeFooter
