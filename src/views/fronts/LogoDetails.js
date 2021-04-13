


import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>

<header style={{backgroundColor:'#EDF9ED'}} id="header" className="site-header">
  <div className="top-header">
    <div className="container">
      <div className="row">
        <div  className="col-lg-2 col-md-4">
          <div className="site-brand">
            <Link to="/"><img style={{width:'151px',height:'147px'}} src="assets/images/logo_dark.png" alt="khalid" /></Link>
          </div>
        </div>
        <div style={{paddingTop:"14px"}} class="col-lg-10 col-md-4">
							<div class="top-header-item">
								<h4>Sat Kabir Institute Of Technology & Management</h4>
                <h6>V.P.O.LADRAWAN,TEH.BAHADURGARD(HARYANA)</h6>
                <h6>(APPROVED BY AICTE,DTE Harayana & Affiliated toMDU Rohtak)</h6>
                <h6>(AN ISO 9001-2008 CERTIFIED INSTITUTE)</h6>

							</div>
						</div>
      </div>
    </div>
  </div>
</header>


        </>
    )
}

export default Header

