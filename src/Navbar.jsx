import React from 'react'
import { NavLink , Link  } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg py-2  navbar-dark ">
    <div className="container ">
      <Link className="navbar-brand text-white fs-1 fw-bold " to={"Start"}>start react</Link>
      <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span >Menu <i className="fa-solid fa-bars"></i></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item mx-2 ps-1" >
            <NavLink    className= {({isActive})=> (isActive)?"nav-link text-white tab-in-charge fs-5 fw-bold":"nav-link text-white fs-5 fw-bold hovering"} to="Portfolio"  >Portfolio</NavLink>
          </li>
          <li className="nav-item mx-2 ps-1">
            <NavLink  className={({isActive})=> isActive?"nav-link text-white tab-in-charge fs-5 fw-bold":"nav-link text-white fs-5 fw-bold hovering"} to="About" >About</NavLink>
          </li>
          <li className="nav-item mx-2 ps-1">
            <NavLink className={({isActive})=> isActive? "nav-link text-white tab-in-charge fs-5 fw-bold" : "nav-link text-white fs-5 fw-bold hovering"} to="Contact">Contact</NavLink>
          </li>
        </ul> 
      </div>
    </div>

  </nav>
  )
}
