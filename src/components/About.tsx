import React from 'react'
import mohamed from "./../assets/mohamed2.jpg"
import { useTranslation } from 'react-i18next';
function About() {
    const [active,setActive] = React.useState("bio");
    const {t} = useTranslation();
  return (
    <div className='about' id='about'>
      <h1 className='page-title mt-5' data-aos="fade-up" data-aos-duration="1500">{t('About')} </h1>
      <div className="d-flex flex-row flex-wrap justify-content-center mt-5">
            <div className='image col-md-4 col-sm-12 me-5 ms-5'>
                <div>

                <img src={mohamed} alt="HADJADJI Mohamed bachir" loading='lazy'  data-aos="fade-up" data-aos-duration="1500" />
                </div>
            </div>
            <div className='col-md-7 col-sm-12 m-2 ' data-aos="fade-down" data-aos-duration="1500" >
            <ul className='list-unstyled d-flex flex-row align-items-center'>
                <li className={active == "bio" ? 'mx-2 active' : "mx-2"}
                onClick={()=>setActive("bio")}><a href='#bio'>{t('Bio')} </a></li>
                <li className={active == "education" ? 'mx-2 active' : "mx-2"}
                onClick={()=>setActive("education")}
                ><a href='#bio'>Education</a></li>
                <li className={active == "experience" ? 'mx-2 active' : "mx-2"}
                onClick={()=>setActive("experience")}><a href='#bio'>{t('Experience')}</a></li>
            </ul>
            <div className={active!= "bio" ? "d-none " : ""} >
            <p className='text-start '>
            {t("I'm HADJADJI Mohamed Bachir Software engineer     A motivated and responsible person, ambitious and positive with a good team spirit, and very excellent skills in web / mobile development.")}

            </p>
            <div className='d-flex flex-row flex-wrap'>
                <ul className='col-md-5 col-sm-12 list-unstyled'>
                    <li className='text-light text-start'> <span className='text-violet'>{t('Age')} : ...  </span> 24 </li>
                    <li className='text-light text-start'> <span className='text-violet'>{t("Freelance")} : ...  </span> {t('Available')} </li>
                    <li className='text-light text-start'> <span className='text-violet'>{t('Phone')} : ...  </span> +213 696 930 704 </li>
                
                </ul>
                <ul className='col-7 list-unstyled'>
                <li className='text-light text-start'> <span className='text-violet'>{t('Nationality')} : ...  </span> {t('Algerian')} </li>
                    <li className='text-light text-start'> <span className='text-violet'>{t("Address")} : ...  </span> Bouchaoui 02 N° 35  ,Chéraga Algiers </li>
                    <li className='text-light text-start'> <span className='text-violet'>{t('Email')} : ...  </span> mohamedbhadjadji@gmail.com </li>
                
                </ul>
            </div>
            </div>
            <div className={active!= "education" ? "d-none" : "mx-2 "}>
                    <h5 className='text-start bg-violet-gradient w-100 p-2 rounded'>LEARNEO</h5>
                    <h5 className='text-start  text-violet'>{t('FORTINET')}</h5>
                    <p className='text-start text-light'>
                        {t('NSE 7  SD-WAN in 2022')}
                    </p>
                    <h5 className='text-start bg-violet-gradient w-100 p-2 rounded'>LEARNEO</h5>
                    <h5 className='text-start  text-violet'>{t('FORTINET')}</h5>
                    <p className='text-start text-light'>
                        {t('NSE 6 FortiAuthenticator in 2023')}
                    </p>
                    <h5 className='text-start bg-violet-gradient w-100 p-2 rounded'>LEARNEO</h5>
                    <h5 className='text-start  text-violet'>{t('FORTINET')}</h5>
                    <p className='text-start text-light'>
                        {t('NSE 6 FortiSwitch in 2022')}
                    </p>
                    <h5 className='text-start bg-violet-gradient w-100 p-2 rounded'>USTHB</h5>
                    <h5 className='text-start  text-violet'>{t('MASTER DEGREE')}</h5>
                    <p className='text-start text-light'>
                        {t('Master in Software Engineering obtained in 2022')}
                    </p>
                    <h5 className='text-start bg-violet-gradient w-100 p-2 rounded'>USTHB</h5>
                    <h5 className='text-start  text-violet'>{t('LICENCE DEGREE')}</h5>
                    <p className='text-start text-light'>
                    {t('LICENCE in academic computing obtained in 2020')}
                    </p>
                    <h5 className='text-start bg-violet-gradient w-100 p-2 rounded'>CEIL BENI MESSOUS</h5>
                    <h5 className='text-start  text-violet'>{t('ENGLISH COURSES B2')}</h5>
                    <p className='text-start text-light'>
                    {t('Obtained in 2019')}
                    </p>

            </div>
            <div className={active!= "experience" ? "d-none" : "sized-card" }>
                    <div className='d-flex flex-row flex-wrap justify-content-start'>
                        <div className='col-md-5  col-sm-12 mx-2'>
                        <h5 className='text-start bg-violet w-100 p-2 rounded'>BBC SCHOOL</h5>
                        <h5 className='text-start  text-violet'>{t('IT MANAGER')}</h5>
                        <p className='text-start text-light'>
                            {t('From 2018 till 2022')}
                        </p>
                                <ul>
                               <li>{t('Develop and update company website pages')}</li>
                               <li>{t('Plan and organize projects')}</li> 
                               <li>{t('Coordinate with team members')}</li>
                                <li>{t('Participate in meetings and write reports')}</li>

                                </ul>
                        <h5 className='text-start bg-violet w-100 p-2 rounded'>{t('FREELANCE')}</h5>
                        <h5 className='text-start  text-violet'>{t('WEB / MOBILE DEVELOPMENT')}</h5>
                        <p className='text-start text-light'>
                        {t('Since 2019')}
                          
                        </p>
                        <ul>
                               <li>{t('Collaborate with the client to set up a commercial register')}</li>
                               <li>{t('Develop mobile and web applications according to customer requests')}</li> 

                        </ul>
                        <h5 className='text-start bg-violet w-100 p-2 rounded'>BBC SCHOOL</h5>
                        <h5 className='text-start  text-violet'>{t('WEB DEVELOPMENT TEACHER')}</h5>
                        <p className='text-start text-light'>
                        {t('From 2020 till 2021')}
                  

                        </p>
                        <ul>
                               <li>{t('Teach HTML / CSS / JS lessons')}</li>
                           
                        </ul>
                        <h5 className='text-start bg-violet w-100 p-2 rounded'>FB TECHNOLOGIES</h5>
                        <h5 className='text-start  text-violet'>{t('INTERNSHIP')}</h5>
                        <p className='text-start text-light'>
                        {t('From AUGUST 2021 till MAY 2022')}
                  

                        </p>
                        <ul>
                               <li>{t('Develop Mobile applications')}</li>
                           
                        </ul>
                        </div>
                        <div className='col-md-5 col-sm-12 mx-2'>
                        
                        <h5 className='text-start bg-violet w-100 p-2 rounded'>NAFTAL</h5>
                        <h5 className='text-start  text-violet'>{t('INTERNSHIP')}</h5>
                        <p className='text-start text-light'>
                        {t('From February 2022 till june 2022')}
                    

                        </p>
                        <ul>
                               <li>{t('Develop Web services using Spring boot')}</li>
                               <li>{t('Creating a web application using Angular')}</li>
                               <li>{t('Creation of two mobile applications using flutter')}</li>
                           
                        </ul>
                        <h5 className='text-start bg-violet w-100 p-2 rounded'>ADEX TECHNOLOGY</h5>
                        <h5 className='text-start  text-violet'>{t('SOFTWARE ENGINEER')}</h5>
                        <p className='text-start text-light'>
                        {t('From May 2022 till September 2022')}
                      

                        </p>
                        <ul>
                               <li>{t('Develop Web applications using Laravel / React')}</li>
                               <li>{t('Develop Mobile applications using react-native ')}</li>
                           
                        </ul>
                        <h5 className='text-start bg-violet w-100 p-2 rounded'>NAFTAL</h5>
                        <h5 className='text-start  text-violet'>{t('SOFTWARE ENGINEER')}</h5>
                        <p className='text-start text-light'>
                        {t('From September 2022 till Now')}
                     
                        </p>
                        <ul>
                               <li>{t('Develop Web applications using Laravel / React')}</li>
                               <li>{t('Develop Mobile applications using flutter ')}</li>
                               <li>{t('Database Monitoring using zabbix')}</li>
                        </ul>

                        </div>

                    </div>
            </div>
            </div>
        </div>  
    </div>
  )
}

export default About
