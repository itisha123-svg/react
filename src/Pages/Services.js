import React from 'react'
import Card from './Card'
import Sdata from './Sdata'

function Services() {
  return (
    <>
    <div className='my-4 '>
        <h1 className='text-center' style={{textDecoration: "underline"}} >our services </h1>
    </div>
    <div className='container'>
  
          <div className='row '>
          {
            Sdata.map((val, index) =>{
              return <Card imgsrc ={val.imgsrc}
              title = {val.title}
              />

            }
            )
          }
           




          </div>

        </div>
     
    </>
  )
}

export default Services