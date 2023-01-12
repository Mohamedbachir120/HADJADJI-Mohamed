import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Header from './Header'
import mohamed from './../assets/Mohamed.png'
import cv from './../assets/cv.pdf'

function Home() {
  return (
    <div className='home' id="home">
    <Header />
    
    <h1 className='hello' data-aos="zoom-in" data-aos-duration="1500">HELLO</h1>
    <img src={mohamed} className="d-md-none" style={{"maxHeight":"40vh"}} alt='HADJADJI Mohamed bachir'/>

    <div className='introduction d-flex flex-column align-item-start' data-aos="fade-up"  data-aos-duration="1500">
    <h1 className='text-start text-white light-weight'>I'm</h1>
    <h1 className='text-start text-white'><span className='light-weight'>Mohamed Bachir</span>  HADJADJI</h1>
    <div className='line'></div>
    <p className='text-start text-light mt-3'>Software engineer with 2 Years of Work Experience</p>
    <a className='download btn text-light' href={cv} download>
     <FontAwesomeIcon icon={faCloudArrowDown}/>
     &nbsp; Download CV</a>
    </div>
     <img src={mohamed} className="picture d-none d-md-block" alt='HADJADJI Mohamed bachir'/>
     </div>
  )
}

export default Home