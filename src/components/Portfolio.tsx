import React from 'react'
import zimail  from "./../assets/zimail.png"
import doctym_web from "./../assets/doctym.png"
import DBManagement from "./../assets/DBmanagement.png"
import usthb_elit from "./../assets/doc.png"
import doctym_app from "./../assets/doctym_mob.jpg"
import Koudami from "./../assets/Koudami.png"
import naftal from "./../assets/naftal.png"
import Python_courses from "./../assets/Python_Courses.png"
import sarlaton from "./../assets/sarlaton.png"
import sgh from "./../assets/sgh.png"
import sudoku from "./../assets/sudoku.png"
import calculator from "./../assets/Calculator.png"
import webCourse from "./../assets/coursesWeb.png"
import zoumi_web from "./../assets/zoumi.png"
import zoumi_mob from "./../assets/zoumi_mob.jpg"
import rekba from "./../assets/rekba.jpg"
import bbc from "./../assets/BBC.png"
import naftimo from "./../assets/naftimo.jpg"
import Web from './web'
import Mobile from './mobile'

function Portfolio() {
    const [active,setActive] = React.useState("All");

  return (
    <div className='portfolio' id='portfolio'>
    <h1 className='page-title my-5 ' data-aos="fade-up" data-aos-duration="1500">PORTFOLIO</h1>
    <ul className='list-unstyled d-flex flex-row align-items-center justify-content-center'>
        <li className={active == "All" ? 'mx-2 active' : "mx-2"}
        onClick={()=>setActive("All")}><a href='#All'>All</a></li>
        <li className={active == "Mobile" ? 'mx-2 active' : "mx-2"}
        onClick={()=>setActive("Mobile")}
        ><a href='#Mobile'>Mobile</a></li>
        <li className={active == "Web" ? 'mx-2 active' : "mx-2"}
        onClick={()=>setActive("Web")}><a href='#Web'>Web</a></li>
       
    </ul>
    <div className={active == "All" ? "":"d-none"}>
       
        <Web />
      
        <Mobile />
        
    </div>
    <div className={active == "Web" ? "":"d-none"}>
        <Web />
 
    </div>
    <div className={active == "Mobile" ? "":"d-none"}>
        <Mobile />
    
    </div>
    </div>
  )
}

export default Portfolio