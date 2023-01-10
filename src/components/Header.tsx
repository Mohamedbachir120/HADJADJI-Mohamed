import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function Header() {
  return (
    <div className='d-flex flex-row justify-content-around header align-items-center'>
        <h2>Mohamed </h2>
        <ul className='list-unstyled d-flex flex-row align-items-center'>
            <li className='mx-2 active'><a href='#home'>Home</a></li>
            <li className='mx-2'><a href='#about'>About</a></li>
            <li className='mx-2'><a href='#services'>Services</a></li>
            <li className='mx-2'><a href='#portfolio'>Portfolio</a></li>
            <li className='mx-2'><a href='#contact'>Contact</a></li>


        </ul>
        <div>
            <Button>Hire Me</Button> 
        </div>
    </div>
  )
}

export default Header
