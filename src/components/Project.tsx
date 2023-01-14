import React from 'react'
import { useTranslation } from 'react-i18next'

function Project() {
  const {t} = useTranslation();
  return (
    <div id='project'>  
        <h1 className='page-title my-5' data-aos="fade-up" data-aos-duration="1500">{t('PROJECTS')}</h1>
    <div className='d-flex flex-row flex-wrap justify-content-center' data-aos="fade-up" data-aos-duration="1500">
        <div className='col-md-3 col-sm-10 bg-ts p-3 rounded m-3'>
              <h1 className='text-violet fw-bold'>{t('Web Development')}</h1>    
              <h4 className='text-light'>+12 {t('PROJECTS')}</h4>
        </div>
        <div className='col-md-3 col-sm-10 bg-ts p-3 rounded m-3'>
              <h1 className='text-violet fw-bold'>{t('Mobile Development')}</h1>    
              <h4 className='text-light'>+4 {t('PROJECTS')}</h4>
        </div>
    </div>
    </div>
  )
}

export default Project