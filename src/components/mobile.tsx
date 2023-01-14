import React from 'react'
import zoumi_mob from "./../assets/zoumi_mob.jpg"
import doctym_app from "./../assets/doctym_mob.jpg"
import rekba from "./../assets/rekba.jpg"
import naftimo from "./../assets/naftimo.jpg"

function Mobile() {
  return (
    <div className='d-flex flex-row flex-wrap justify-content-center'>
         <div className='col-md-2 col-sm-5 m-2 py-2'>
           <img src={zoumi_mob} className="rounded" loading='lazy' alt="Zoumi mobile" />

        </div>
        <div className='col-md-2 col-sm-5 m-2 py-2'>
           <img src={doctym_app} className="rounded" loading='lazy' alt="Doctym mobile" />

        </div>
        <div className='col-md-2 col-sm-5 m-2 py-2'>
           <img src={rekba} className="rounded" loading='lazy' alt="Rekba" />

        </div>
        <div className='col-md-2 col-sm-5 m-2 py-2'>
           <img src={naftimo} className="rounded" loading='lazy' alt="Naftimmo" />

        </div>
    </div>
  )
}

export default Mobile
