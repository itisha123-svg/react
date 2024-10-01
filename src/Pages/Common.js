import React from 'react'

function Common(props) {
  return (
  <>
   <section >
    <div className='container'>
      <div className='row'>
         
        <div className='col-md-6 pt-5   d-flex justify-content-center flex-column '>
     <h1> {props.heading} <strong className="text-info">Thapa Technical</strong></h1>
     <h5 className=' my-1'> we are the talented developer making websites </h5>
     <div className='mt-2'>
      <a href='' className='btn btn-get-end btn-outline-dark'> {props.btn} </a>
     </div>
     </div>

     <div className='col-md-6 col-lg-6 box mt-3 '> <img src= {props.img} alt='img'></img> </div>

     </div>
     </div>
   
    </section>
  
  
  
  </>
  )
}

export default Common