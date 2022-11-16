import React from 'react'
import photo from './avataaars.svg';
import $ from 'jquery';

export default function Start() {
  return (
    <section id='startSec' className='py-5' >
        <div className="container py-5" >
            <div className="row flex-column text-center text-white" >
                <div className="w-25 m-auto">
                    <img src={photo} alt="" />
                </div>
                <h1 className='position-relative my-4 pb-3 white'>START REACT <span className=' position-absolute start-50 translate-middle-x'><i className="fa-solid fa-star "></i></span></h1>
                <p className='my-5 fs-4'>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </div>
        <button className='position-fixed fs-2 fw-bolder text-white d-none' onClick={goUp}>^</button>
    </section>
  )
}
$(window).on("scroll" , ()=>{
  if($(window).scrollTop()>=$('#Portfolio').offset().top)
  {
    $('#startSec button').removeClass("d-none");
  }
  else
  {
    $('#startSec button').addClass("d-none");
  }

})
function goUp()
{
  $('html,body').animate({scrollTop : 0} , 500);
}