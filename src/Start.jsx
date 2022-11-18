import React from 'react'
import photo from './avataaars.svg';
export default function Start() {
  return (
    
    <section id='startSec' className='py-1' >
        <div className="container " >
            <div className="row flex-column text-center text-white" >
                <div className="w-25 m-auto">
                    <img src={photo} alt="" />
                </div>
                <h1 className='position-relative my-4 pb-3 white'>START REACT <span className=' position-absolute start-50 translate-middle-x'><i className="fa-solid fa-star "></i></span></h1>
                <p className='my-5 fs-4'>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </div>
    </section>
  )
}
