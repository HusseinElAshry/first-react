import React from 'react'

export default function About() {
  return (
    <section id='About' className='py-5' >
      <div className='container py-5  text-white'>
      <h1 className='position-relative my-3 pb-4 white  text-center'>ABOUT <span className=' position-absolute start-50 translate-middle-x'><i className="fa-solid fa-star "></i></span></h1>
        <div className="row justify-content-center py-3">
          <div className="col-xl-4 pt-4">
            <div>
              <p className='fs-4'>
                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
              </p>
            </div>
          </div>
          <div className="col-xl-4 pt-4">
            <div>
              <p className='fs-4'>
              You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!  
              </p>
            </div>
          </div>

        </div>
      </div>
    </section >
  )
}
