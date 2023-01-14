import React from 'react'
import { FaHome  , FaImage , FaAddressCard , FaInfoCircle   } from 'react-icons/fa'

import { faGears } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function BottomBar() {
  return (
    <div className='d-lg-none pt-2' id='bottom-bar'>     
     <ul className='list-unstyled d-flex flex-row align-items-center justify-content-around'>
    <li className='mx-2 col-2 fs-3'><a href='#portfolio'><FaImage /></a></li>
    <li className='mx-2  col-2 fs-3'><a href='#services'><FontAwesomeIcon icon={faGears} /></a></li>
    <li className='mx-2 col-2 fs-3' ><a href='#home'  ><FaHome  /></a></li>
    <li className='mx-2 col-2 fs-3'><a href='#contact'><FaAddressCard /></a></li>
    <li className='mx-2 col-2  fs-3'><a href='#about'><FaInfoCircle /></a></li>



</ul></div>
  )
}

export default BottomBar