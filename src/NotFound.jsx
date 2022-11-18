import React from 'react'
import err from './img/images (1)/FB_IMG_1589589651072.jpg' 
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
        <div className='text-center py-5 '>
            <img src={err} alt=""  className='mb-3 d-block m-auto img-fluid'/>
            <Link className='btn btn-success p-3 ' to={"Start"}>Go To Home Page</Link>
        </div>
        
        
    </>
  )
}
