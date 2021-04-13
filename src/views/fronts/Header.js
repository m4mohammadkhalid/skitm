import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
<header className="header_wrap dark_skin">

  <div className="container">
    <nav className="navbar navbar-expand-lg"> 
      <Link className="navbar-brand" to="index.html">
       <h5>Sat Kabir Institute</h5>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="ion-android-menu" /> </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="dropdown">
            <Link className="nav-link active" to="/" data-toggle="dropdown">Home</Link>
           
          </li>
          <li className="dropdown">
            <Link className="nav-link" to="/about" data-toggle="dropdown">About</Link>
       
          </li>
          <li className="dropdown">
            <Link className="nav-link" to="#" data-toggle="dropdown">Course</Link>
            
          </li>
          <li className="dropdown">
            <Link className="nav-link" to="#" data-toggle="dropdown">Event</Link>
            
          </li>
          <li className="dropdown">
            <Link className="nav-link" to="#" data-toggle="dropdown">Teacher</Link>
            
          </li>
          <li className="dropdown">
            <Link className="nav-link" to="#" data-toggle="dropdown">Blog</Link>
            
          </li>
          <li>
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</header>

        </>
    )
}

export default Header
