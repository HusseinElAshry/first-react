import React from 'react'
import Navbar from './Navbar'
import err from './img/images (1)/FB_IMG_1589589651072.jpg' 
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
        <Navbar/>
        <div className='text-center py-5 '>
            <img src={err} alt=""  className='mb-3 d-block m-auto img-fluid'/>
            <Link className='btn btn-success p-3 ' to={"home"}>Go To Home Page</Link>
        </div>
        
        
    </>
  )
}
