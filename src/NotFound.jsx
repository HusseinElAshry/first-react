import React from 'react'
import Navbar from './Navbar'
import err from './img/images (1)/FB_IMG_1589589651072.jpg' 

export default function NotFound() {
  return (
    <>
        <Navbar/>
        <div className='text-center py-5'>
            <img src={err} alt="" />
        </div>
        
    </>
  )
}
