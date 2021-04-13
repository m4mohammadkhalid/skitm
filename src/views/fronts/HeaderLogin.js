import React from 'react'
import { Link } from 'react-router-dom'

const HeaderLogin = () => {
    return (
        <>
        <header className="header_wrap dark_skin ">
              <div className="top-header bg_blue_dark2 light_skin">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <ul className="contact_detail list_none text-center text-md-left">
            <li><Link to="#"><i className="ti-mobile" />+91 9102603030</Link></li>
            <li><Link to="#"><i className="ti-email" /><span className="__cf_email__" data-cfemail="1e777078715e67716b6c737f7772307d7173">a4altafali@gmail.com</span></Link></li>
          </ul>
        </div>
        <div className="col-md-6">
          <div className="d-flex flex-wrap align-items-center justify-content-md-end justify-content-center mt-2 mt-md-0">
            <ul className="list_none social_icons social_white text-center text-md-right">
              <li><Link to="#"><i className="ion-social-facebook" /></Link></li>
              <li><Link to="#"><i className="ion-social-twitter" /></Link></li>
              <li><Link to="#"><i className="ion-social-googleplus" /></Link></li>
              <li><Link to="#"><i className="ion-social-youtube-outline" /></Link></li>
              <li><Link to="#"><i className="ion-social-instagram-outline" /></Link></li>
            </ul>
            <ul className="list_none header_list border_list ml-1">
              <li><Link to="#" data-toggle="modal" data-target="#Login">Login</Link></li>
              <li><Link to="#" className="btn btn-default btn-sm rounded-0">Apply Now</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  </header>
        </>
    )
}

export default HeaderLogin
