import React from 'react'
import zimail  from "./../assets/zimail.png"
import doctym_web from "./../assets/doctym.png"
import DBManagement from "./../assets/DBmanagement.png"
import usthb_elit from "./../assets/doc.png"
import Koudami from "./../assets/Koudami.png"
import naftal from "./../assets/naftal.png"
import Python_courses from "./../assets/Python_Courses.png"
import sarlaton from "./../assets/sarlaton.png"
import sgh from "./../assets/sgh.png"
import sudoku from "./../assets/sudoku.png"
import calculator from "./../assets/Calculator.png"
import webCourse from "./../assets/coursesWeb.png"
import zoumi_web from "./../assets/zoumi.png"
import bbc from "./../assets/BBC.png"

function web() {
  return (
    <div className='d-flex flex-row flex-wrap justify-content-center'>
         <div className='col-md-5 col-sm-10 m-2'>
        <img src={DBManagement} className="rounded" loading="lazy" alt="DB management" />

        </div>
        <div className='col-md-5 col-sm-10 m-2'>
        <img src={bbc} className="rounded" loading="lazy" alt="BBC" />

        </div>
        <div className='col-md-5 col-sm-10 m-2 py-2'>
            <img src={doctym_web} className="rounded" loading="lazy" alt="Doctym" />

        </div>
        <div className='col-md-5 col-sm-10 m-2 py-2'>
           <img src={sarlaton} className="rounded" alt="SarlAton" />

        </div>
        <div className='col-md-5 col-sm-10 m-2'>
        <img src={zoumi_web} className="rounded" alt="Zoumi web" />

        </div>
        <div className='col-md-5 col-sm-10 m-2 '>
            <img src={sgh} className="rounded" loading="lazy" alt="Saudi german healt" />

        </div>
    
      
        <div className='col-md-5 col-sm-10 m-2'>
        <img src={usthb_elit} className="rounded" loading="lazy" alt="Usthb elite" />

        </div>
        <div className='col-md-5 col-sm-10 m-2 py-2'>
           <img src={Koudami} className="rounded" loading="lazy" alt="Koudami" />

        </div>
        <div className='col-md-5 col-sm-10 m-2'>
            <img src={zimail} className="rounded" loading="lazy" alt="Zimail" />
        </div>
        <div className='col-md-5 col-sm-10 m-2 py-2'>
           <img src={Python_courses} className="rounded" loading="lazy" alt="Python courses" />

        </div>
      
        <div className='col-md-5 col-sm-10 m-2'>
            <img src={naftal} className="rounded" loading="lazy" alt="Naftal" />
        </div>
        <div className='col-md-5 col-sm-10 m-2 py-2'>
           <img src={calculator} className="rounded" loading="lazy" alt="Calculator" />

        </div>
        <div className='col-md-5 col-sm-10 m-2'>
            <img src={sudoku} className="rounded" loading="lazy" alt="Sudoku" />
        </div>
        <div className='col-md-5 col-sm-10 m-2 py-2'>
           <img src={webCourse} className="rounded" loading="lazy" alt="Web courses" />

        </div>
    </div>
  )
}

export default web
