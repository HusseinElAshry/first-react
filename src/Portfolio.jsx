import React from 'react';
import $  from 'jquery';
import cabin from './img/images (1)/cabin.png'
import cake from './img/images (1)/cake.png'
import circus from './img/images (1)/circus.png'
import game from './img/images (1)/game.png'
import safe from './img/images (1)/safe.png'
import submarine from './img/images (1)/submarine.png'
export default function Portfolio() {
  return (
  <>
    <section id='Portfolio' className='py-5'>
      <div className="container py-5">
        <h1 className='text-center position-relative fw-bold dark py-4'>PORTFOLIO <span className=' position-absolute start-50 translate-middle-x'><i className="fa-solid fa-star "></i></span></h1>
        <div className="row py-5 gap-3 justify-content-center align-items-center">

        <div className="col-xl-3 g-2 col-lg-4 ">
            <div className='position-relative layer '>
              <img src={cabin} alt="" className='img-fluid rounded-3'/>
              <div className='w-100 h-100  position-absolute top-0 left-0 over-lay  rounded-3 justify-content-center align-items-center'>
                <i className="fa-solid fa-plus fa-4x text-white" onClick={()=>{getSrc(0,".fa-plus",`LOG CABIN`)}}></i>
              </div>
            </div>
          </div>


          <div className="col-xl-3 g-2 col-lg-4  ">
            <div className='position-relative layer '>
              <img src={cake} alt="" className='img-fluid rounded-3'/>
              <div className='w-100 h-100  position-absolute top-0 left-0 over-lay  rounded-3 justify-content-center align-items-center'>
                <i className="fa-solid fa-plus fa-4x text-white " onClick={()=>{getSrc(1,".fa-plus",`TASTY CAKE`)}}></i>
              </div>
            </div>
          </div>

          <div className="col-xl-3 g-2 col-lg-4 ">
            <div className='position-relative layer '>
              <img src={circus} alt="" className='img-fluid rounded-3'/>
              <div className='w-100 h-100  position-absolute top-0 left-0 over-lay  rounded-3 justify-content-center align-items-center'>
                <i className="fa-solid fa-plus fa-4x text-white " onClick={()=>{getSrc(2,".fa-plus",`CIRCUS TENT`)}}></i>
              </div>
            </div>
          </div>

          <div className="col-xl-3 g-2 col-lg-4 ">
            <div className='position-relative layer '>
              <img src={game} alt="" className='img-fluid rounded-3'/>
              <div className='w-100 h-100  position-absolute top-0 left-0 over-lay  rounded-3 justify-content-center align-items-center'>
                <i className="fa-solid fa-plus fa-4x text-white " onClick={()=>{getSrc(3,".fa-plus",`CONTROLLER`)}} ></i>
              </div>
            </div>
          </div>

          <div className="col-xl-3 g-2 col-lg-4 ">
            <div className='position-relative layer '>
              <img src={safe} alt="" className='img-fluid rounded-3'/>
              <div className='w-100 h-100  position-absolute top-0 left-0 over-lay  rounded-3 justify-content-center align-items-center'>
                <i className="fa-solid fa-plus fa-4x text-white " onClick={()=>{getSrc(4,".fa-plus",`LOCKED SAFE`)}}></i>
              </div>
            </div>
          </div>

          <div className="col-xl-3 g-2 col-lg-4 ">
            <div className='position-relative layer '>
              <img src={submarine} alt="" className='img-fluid rounded-3'/>
              <div className='w-100 h-100  position-absolute top-0 left-0 over-lay  rounded-3 justify-content-center align-items-center'>
                <i className="fa-solid fa-plus fa-4x text-white " onClick={()=>{getSrc(5,".fa-plus",`SUBMARINE`)}}></i>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className='popUp position-fixed top-0 left-0 w-100 h-100 d-none'>
        <div className="popUpChild bg-white position-fixed rounded-4">
          <div className='py-5 text-center position-relative '>
            <i className="fa-solid fa-xmark fa-3x position-absolute close-btn" onClick={outgoing}></i>
            <h1 className='text-center position-relative fw-bold dark'><span></span> <span className=' position-absolute start-50 translate-middle-x'><i className="fa-solid fa-star "></i></span></h1>
            <div className='col-lg-6 col-md-8 col-sm-10  my-5 mx-auto'>
              <img src={cabin} alt="" className='img-fluid' />  
            </div>
            <p className='text-center px-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum laboriosam possimus quia. Eum, velit obcaecati. Minus, praesentium commodi quasi excepturi cupiditate molestiae veniam eligendi repellendus quis expedita itaque. Explicabo odio illo adipisci fuga accusantium, vitae dicta excepturi, sequi officia eos itaque commodi delectus voluptatum nemo cupiditate laudantium repellendus dolorum deserunt.
            </p>
            <button onClick={outgoing} className='rounded-3 py-2'><span><i className="fa-solid fa-xmark"></i></span>close window</button>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}
function outgoing()
{
  $(".popUp").removeClass("d-flex");
  $(".popUp").addClass("d-none");
}
function popUp( src ){
  $(".popUp img").attr("src" ,`${src}`);
  $(".popUp").addClass("d-flex");
  $(".popUp").removeClass("d-none");
}
function getSrc(index , element ,phrase)
{
  let imgSrc = $(`${element}`).eq(index).parent(".over-lay").siblings("img").attr("src");
  $(".popUpChild h1 span").eq(0).html(`${phrase}`)
  popUp(imgSrc)
}
$("body,html").on( "click" , (eInfo)=>{
  if($(eInfo.target).hasClass("popUp"))
  {
    outgoing();
  }
});