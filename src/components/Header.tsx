import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useRef } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
function Header() {
  const sideBar = useRef();
  const {t} = useTranslation();
  return (
    
    <div className='d-flex flex-row justify-content-between header align-items-center'>
        <h2>Mohamed </h2>
        <div className='d-none d-lg-block '>
        <ul className='list-unstyled d-flex flex-row align-items-center'>
            <li className='mx-2 active'><a href='#home'>{t('Home')}</a></li>
            <li className='mx-2'><a href='#about'>{t('About')}</a></li>
            <li className='mx-2'><a href='#services'>{t('Services')}</a></li>
            <li className='mx-2'><a href='#portfolio'>{t('Portfolio')}</a></li>
            <li className='mx-2'><a href='#contact'>{t('Contact')}</a></li>


        </ul>
        </div>
        <div className=' '>
            <Button>{t('Hire Me')}</Button> 
        </div>
       
   
    </div>
  )
}

export default Header
