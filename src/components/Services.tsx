import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile,faDatabase,faGlobe } from '@fortawesome/free-solid-svg-icons'
function Services() {
  return (
    <div className='services' id='services'>
            <h1 className='page-title mt-3 mb-5' data-aos="fade-up" data-aos-duration="1500">Services</h1>
             <div className="d-flex flex-row justify-content-center my-5 rounded-h1 align-items-end pt-5" data-aos="fade-up" data-aos-duration="1500">
                <div className='col-3 d-flex flex-column mx-3'>
                <h3><FontAwesomeIcon icon={faMobile} /> </h3>
                    <h4>Mobile Development</h4>
                    <p>Develop and maintain cross plateform applications using Flutter and bloc pattern for state management</p>
                </div>
                <div className='col-3 d-flex flex-column mx-3'>
                <h3><FontAwesomeIcon icon={faGlobe} /> </h3>
                    <h4>Web Development</h4>
                    <p>Develop and maintain and host  Web applications using Laravel React with redux for state management </p>
                </div>
                <div className='col-3 d-flex flex-column mx-3'>
                <h3><FontAwesomeIcon icon={faDatabase} /> </h3>

                    <h4>Database Administration</h4>
                    <p>Create software solutions and scripts for database management, Monitor databases using zabbix </p>
                </div>
             </div>   
        </div>  
  )
}

export default Services