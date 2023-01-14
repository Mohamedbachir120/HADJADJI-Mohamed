import React from 'react'
import { useTranslation } from 'react-i18next';
import { FaFacebook , FaInstagram , FaTwitter} from 'react-icons/fa';
function Footer() {
  const {t} = useTranslation();
  return (
    <div>
    <div className='d-flex flex-row flex-wrap mt-5 ms-5 justify-content-center' id='footer'>
        <div className="col-lg-3  col-md-12 justify-content-center d-flex flex-column align-items-center">
            <h3 className='text-violet text-start'>Mohamed</h3>
            <p className='my-3 text-light text-start'>{t('Feel free to join me in social media')}</p>
            <div className='my-2'>
              <a href="https://www.facebook.com/moh.hdj.3/">

              <FaFacebook className='text-violet mx-1'/>  
              </a>
              <a href="https://www.instagram.com/hdj.moh/?hl=fr">
               <FaInstagram className='text-violet mx-1' /> 
              </a>
              <a href="https://twitter.com/Mohamed17790125">
               <FaTwitter className='text-violet mx-1'/>
              </a>
            </div>
        </div>
        <div className="col-lg-3 col-12">
          <h5 className='text-light text-center'>{t('Quick links')}</h5>
          <ul className='list-unstyled'>
            <li> <a href="#home" className='text-violet' style={{"textDecoration":"none"}}>{t('Home')}</a> </li>
            <li> <a href="#about" className='text-white' style={{"textDecoration":"none"}}>{t('About')}</a> </li>
            <li> <a href="#services" className='text-white' style={{"textDecoration":"none"}}>{t('Services')}</a> </li>
            <li> <a href="#skill" className='text-white' style={{"textDecoration":"none"}}>{t('Skills')}</a> </li>
            <li> <a href="#portfolio" className='text-white' style={{"textDecoration":"none"}}>{t('Portfolio')}</a> </li>
            <li> <a href="#project" className='text-white' style={{"textDecoration":"none"}}>{t('Projects')}</a> </li>
         
          </ul>
        </div>
        <div className="col-lg-3 col-12">
          <h5 className='text-light'>Services</h5>
          <ul className='list-unstyled text-center'>
            <li> <a href="##" className='text-white' style={{"textDecoration":"none"}}>Frontend Development</a> </li>
            <li> <a href="##" className='text-white' style={{"textDecoration":"none"}}>Backend Development</a> </li>
            <li> <a href="##" className='text-white' style={{"textDecoration":"none"}}>Database Adminstration</a> </li>
            <li> <a href="##" className='text-white' style={{"textDecoration":"none"}}>Software Design</a> </li>
            <li> <a href="##" className='text-white' style={{"textDecoration":"none"}}>Mobile Development</a> </li>
         
          </ul>
        </div>
        <div className="col-lg-3 col-12">
          <h5 className='text-light'>Contact</h5>
          <ul className='list-unstyled text-center'>
            <li> <a href="##" className='text-white' style={{"textDecoration":"none"}}>Bouchaoui 02 N° 35  ,Chéraga Algiers</a> </li>
            <li> <a href="##" className='text-white' style={{"textDecoration":"none"}}>Phone : +213 696 930 704  / <br /> +213 540 796 061</a> </li>
            <li> <a href="##" className='text-white' style={{"textDecoration":"none"}}>Email : mohamedbhadjadji@gmail.com </a> </li>
           
          </ul>
        </div>

    </div>
    <div className='border-top mt-5 text-light copyright pt-2'>
      <p>{t('Inspired by Patrick james')}</p>
       <h5 className='text-center'>&#169; 2023, {t('All Right Reserved')} 	</h5>
    </div>
    </div>
  )
}

export default Footer