import React from 'react'
import './Contact.css'

function Contact() {
  return (
   <>
   <section className='format'>
   
   <div className='content'>
    <h1 className='text-center'> contact us</h1>
    <div className=' container'>
      <div className='row'>
        <div className='col-md-6 col-10 mx-auto'>
        <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">full name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" placeholder='enter name'/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">phone number</label>
    <input type="number" class="form-control" id="exampleInputEmail1" placeholder='enter number' />
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder='enter email' />
    
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='message'></textarea>
</div>
  <button type="submit" class="btn btn-success ">Submit</button>
</form>
        </div>
      </div>
    </div>


   </div>
   </section>
   
   </>
  )
}
export default Contact