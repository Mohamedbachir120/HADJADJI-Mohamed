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
         <div className='col-5 m-2'>
        <img src={DBManagement} className="rounded" alt="DB management" />

        </div>
        <div className='col-5 m-2'>
        <img src={bbc} className="rounded" alt="BBC" />

        </div>
        <div className='col-5 m-2 py-2'>
            <img src={doctym_web} className="rounded" alt="Doctym" />

        </div>
        <div className='col-5 m-2 py-2'>
           <img src={sarlaton} className="rounded" alt="SarlAton" />

        </div>
        <div className='col-5 m-2'>
        <img src={zoumi_web} className="rounded" alt="Zoumi web" />

        </div>
        <div className='col-5 m-2 '>
            <img src={sgh} className="rounded" alt="Saudi german healt" />

        </div>
    
      
        <div className='col-5 m-2'>
        <img src={usthb_elit} className="rounded" alt="Usthb elite" />

        </div>
        <div className='col-5 m-2 py-2'>
           <img src={Koudami} className="rounded" alt="Koudami" />

        </div>
        <div className='col-5 m-2'>
            <img src={zimail} className="rounded" alt="Zimail" />
        </div>
        <div className='col-5 m-2 py-2'>
           <img src={Python_courses} className="rounded" alt="Python courses" />

        </div>
      
        <div className='col-5 m-2'>
            <img src={naftal} className="rounded" alt="Naftal" />
        </div>
        <div className='col-5 m-2 py-2'>
           <img src={calculator} className="rounded" alt="Calculator" />

        </div>
        <div className='col-5 m-2'>
            <img src={sudoku} className="rounded" alt="Sudoku" />
        </div>
        <div className='col-5 m-2 py-2'>
           <img src={webCourse} className="rounded" alt="Web courses" />

        </div>
    </div>
  )
}

export default web
