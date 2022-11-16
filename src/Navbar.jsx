import React from 'react'
import { NavLink , Link  } from 'react-router-dom';
import $ from 'jquery';
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg py-3  navbar-dark position-fixed start-0 end-0">
    <div className="container ">
      <NavLink onClick={()=> {move('#startSec')}} className="navbar-brand text-white fs-1 fw-bold " to={"Start"}>start react</NavLink>
      <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span >Menu <i className="fa-solid fa-bars"></i></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item mx-2 ps-1" >
            <NavLink  onClick={()=> {move('#Portfolio')}}  className= {({isActive})=> (isActive)?"nav-link text-white tab-in-charge fs-5 fw-bold":"nav-link text-white fs-5 fw-bold hovering"} to="Portfolio"  >Portfolio</NavLink>
          </li>
          <li className="nav-item mx-2 ps-1">
            <NavLink onClick={()=> {move('#About')}} className={({isActive})=> isActive?"nav-link text-white tab-in-charge fs-5 fw-bold":"nav-link text-white fs-5 fw-bold hovering"} to="About" >About</NavLink>
          </li>
          <li className="nav-item mx-2 ps-1">
            <NavLink onClick={()=> {move('#Contact')}} className={({isActive})=> isActive? "nav-link text-white tab-in-charge fs-5 fw-bold" : "nav-link text-white fs-5 fw-bold hovering"} to="Contact">Contact</NavLink>
          </li>
        </ul> 
      </div>
    </div>

  </nav>
  )
}

function move(secId)
{
  let secLength = $(`${secId}`).offset().top; 
  $("html,body").animate({scrollTop : secLength},500);  
}
$(window).on("scroll",()=>{
  if($(window).scrollTop()<=20)
  {
    $("nav").addClass("py-3");
    $("nav").removeClass("py-1");
  }
  else
  {
    $("nav").addClass("py-1");
    $("nav").removeClass("py-3");
  }
})