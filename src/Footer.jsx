import React from 'react'

export default function Footer() {
  return (
    <section id='Footer' >
        <div className="container py-4">
            <div className="row py-4 text-white text-center g-4">
                <div className="col-xl-4">
                    <div>
                        <p className="fs-3 fw-bold">LOCATION</p>
                        <p className='fs-5'>
                        2215 John Daniel Drive Clark, MO 65243
                        </p>
                    </div>
                </div>

                <div className="col-xl-4">
                    <div>
                        <p className="fs-3 fw-bold mb-3">AROUND THE WEB</p>
                        <div className='d-flex gap-1 justify-content-center '>
                            <div className="icon "><i className="fa-brands fa-facebook-f "></i></div>
                            <div className="icon"><i className="fa-brands fa-twitter "></i></div>
                            <div className="icon"><i className="fa-brands fa-linkedin-in "></i></div>
                            <div className="icon"><i className="fa-brands fa-dribbble "></i></div>
                        </div>
                    </div>
                </div>    

                <div className="col-xl-4">
                    <div>
                        <p className="fs-3 fw-bold">ABOUT FREELANCER</p>
                        <p className="fs-5">Freelance is a free to use, MIT <wbr/>licensed Bootstrap theme created by<wbr/>Route</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-black '>
            <p className='text-white text-center py-3'>Copyright © Your Website 2021</p>
        </div>
    </section >
  )
}
