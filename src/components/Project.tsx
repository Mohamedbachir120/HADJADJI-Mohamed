import React from 'react'

function Project() {
  return (
    <div id='project'>  
        <h1 className='page-title my-5' data-aos="fade-up" data-aos-duration="1500">PROJECTS</h1>
    <div className='d-flex flex-row justify-content-center' data-aos="fade-up" data-aos-duration="1500">
        <div className='col-3 bg-ts p-3 rounded mx-3'>
              <h1 className='text-violet fw-bold'>Web Development</h1>    
              <h4 className='text-light'>+12 projects</h4>
        </div>
        <div className='col-3 bg-ts p-3 rounded mx-3'>
              <h1 className='text-violet fw-bold'>Mobile Development</h1>    
              <h4 className='text-light'>+4 projects</h4>
        </div>
    </div>
    </div>
  )
}

export default Project