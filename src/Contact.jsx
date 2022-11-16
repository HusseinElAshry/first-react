import React from 'react';
export default function Contact() {
  return (
    <section id='Contact' className='py-5'>
      <div className="container py-3">
        <h1 className='text-center position-relative fw-bold dark pb-4'>CONTACT ME <span className=' position-absolute start-50 translate-middle-x'><i className="fa-solid fa-star "></i></span></h1>
        <div className="row py-4">
            <div className="mb-3">
              <input  type="text" className="form-control" id="name" placeholder="Name"/>
             </div>

             <div className="mb-3">
              <input  type="email" className="form-control" id="email" placeholder="Email Address"/>
             </div>

             <div className="mb-3">
              <input  type="text" className="form-control" id="phone" placeholder="Phone Number"/>
             </div>


              <div className="mb-3 form-floating">
                <textarea className="form-control py-4" id="Textarea" placeholder='Message'></textarea>
                <label htmlFor="Textarea" className='text-success ps-4'>Message</label>
              </div>
        </div>
        <button className='p-2'>Send</button>
      </div>
    </section>
  )
}
