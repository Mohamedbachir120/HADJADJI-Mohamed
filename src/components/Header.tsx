import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useRef } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Header() {
  const sideBar = useRef();
  return (
    
    <div className='d-flex flex-row justify-content-between header align-items-center'>
        <h2>Mohamed </h2>
        <div className='d-none d-lg-block '>
        <ul className='list-unstyled d-flex flex-row align-items-center'>
            <li className='mx-2 active'><a href='#home'>Home</a></li>
            <li className='mx-2'><a href='#about'>About</a></li>
            <li className='mx-2'><a href='#services'>Services</a></li>
            <li className='mx-2'><a href='#portfolio'>Portfolio</a></li>
            <li className='mx-2'><a href='#contact'>Contact</a></li>


        </ul>
        </div>
        <div className='d-none d-lg-block '>
            <Button>Hire Me</Button> 
        </div>
        <div>
         <Button className='d-lg-none' onClick={(e)=>{
            sideBar?.current?.classList!.remove('d-none');
            e.currentTarget.classList.add('d-none');
         }}><FontAwesomeIcon icon={faBars} />
         </Button> 

        </div>
        <div className="side-bar d-none" ref={sideBar} >
        <ul className='list-unstyled align-items-center'>
            <li className='mx-2 active'><a href='#home'>Home</a></li>
            <li className='mx-2'><a href='#about'>About</a></li>
            <li className='mx-2'><a href='#services'>Services</a></li>
            <li className='mx-2'><a href='#portfolio'>Portfolio</a></li>
            <li className='mx-2'><a href='#contact'>Contact</a></li>


        </ul>
        </div>
    </div>
  )
}

export default Header
