import React from 'react'
import { FaFacebook , FaInstagram , FaTwitter} from 'react-icons/fa';
function Footer() {
  return (
    <div>
    <div className='d-flex flex-row mt-5 ms-5 ' id='footer'>
        <div className="col-3 d-flex flex-column align-items-center">
            <h3 className='text-violet text-start'>Mohamed</h3>
            <p className='my-3 text-light text-start'>Feel free to join me in social media</p>
            <div>
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
        <div className="col-3">
          <h5 className='text-light'>Quick links</h5>
          <ul className='list-unstyled'>
            <li> <a href="#home" className='text-violet' style={{"text-decoration":"none"}}>Home</a> </li>
            <li> <a href="#about" className='text-white' style={{"text-decoration":"none"}}>About</a> </li>
            <li> <a href="#services" className='text-white' style={{"text-decoration":"none"}}>Services</a> </li>
            <li> <a href="#skill" className='text-white' style={{"text-decoration":"none"}}>Skill</a> </li>
            <li> <a href="#portfolio" className='text-white' style={{"text-decoration":"none"}}>Portfolio</a> </li>
            <li> <a href="#project" className='text-white' style={{"text-decoration":"none"}}>Projects</a> </li>
         
          </ul>
        </div>
        <div className="col-3">
          <h5 className='text-light'>Services</h5>
          <ul className='list-unstyled text-center'>
            <li> <a href="##" className='text-white' style={{"text-decoration":"none"}}>Frontend Development</a> </li>
            <li> <a href="##" className='text-white' style={{"text-decoration":"none"}}>Backend Development</a> </li>
            <li> <a href="##" className='text-white' style={{"text-decoration":"none"}}>Database Adminstration</a> </li>
            <li> <a href="##" className='text-white' style={{"text-decoration":"none"}}>Software Design</a> </li>
            <li> <a href="##" className='text-white' style={{"text-decoration":"none"}}>Mobile Development</a> </li>
         
          </ul>
        </div>
        <div className="col-3">
          <h5 className='text-light'>Contact</h5>
          <ul className='list-unstyled text-center'>
            <li> <a href="##" className='text-white' style={{"text-decoration":"none"}}>Bouchaoui 02 N° 35  ,Chéraga Algiers</a> </li>
            <li> <a href="##" className='text-white' style={{"text-decoration":"none"}}>Phone : +213 696 930 704  / <br /> +213 540 796 061</a> </li>
            <li> <a href="##" className='text-white' style={{"text-decoration":"none"}}>Email : mohamedbhadjadji@gmail.com </a> </li>
           
          </ul>
        </div>

    </div>
    <div className='border-top mt-5 text-light'>
      <p>Inspired by Patrick james</p>
       <h5 className='text-center'>&#169; 2023, All Right Reserver 	</h5>
    </div>
    </div>
  )
}

export default Footer