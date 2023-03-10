import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile,faDatabase,faGlobe } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'

function Services() {
  const {t} = useTranslation()
  return (
    <div className='services' id='services'>
            <h1 className='page-title mt-3 mb-3' data-aos="fade-up" data-aos-duration="1500">Services</h1>
             <div className="d-flex flex-row justify-content-center   rounded-h1 align-items-start pt-5 flex-wrap" data-aos="fade-up" data-aos-duration="1500">
                <div className='col-md-3 col-sm-12 d-flex flex-column m-3'>
                <h3><FontAwesomeIcon icon={faMobile} /> </h3>
                    <h4>{t('Mobile Development')}</h4>
                    <p>{t('Develop and maintain cross plateform applications using Flutter and bloc pattern for state management')}</p>
                </div>
                <div className='col-md-3 col-sm-12 d-flex flex-column m-3'>
                <h3><FontAwesomeIcon icon={faGlobe} /> </h3>
                    <h4>{t('Web Development')}</h4>
                    <p>{t('Develop and maintain and host  Web applications using Laravel React with redux for state management')}</p>
                </div>
                <div className='col-md-3 col-sm-12 d-flex flex-column m-3'>
                <h3><FontAwesomeIcon icon={faDatabase} /> </h3>

                    <h4>{t('Database Administration')}</h4>
                    <p>{t('Create software solutions and scripts for database management, Monitor databases using zabbix')}</p>
                </div>
             </div>   
        </div>  
  )
}

export default Services