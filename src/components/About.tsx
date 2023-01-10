import React from 'react'
import mohamed from "./../assets/mohamed2.jpg"
function About() {
    const [active,setActive] = React.useState("bio");
  return (
    <div className='about' id='about'>
      <h1 className='page-title mt-5' data-aos="fade-up" data-aos-duration="1500">About</h1>
      <div className="d-flex flex-row justify-content-center mt-5">
            <div className='image col-4 me-3'>
                <div>

                <img src={mohamed} alt="HADJADJI Mohamed bachir"  data-aos="fade-up" data-aos-duration="1500" />
                </div>
            </div>
            <div className='col-7 ms-5' data-aos="fade-down" data-aos-duration="1500" >
            <ul className='list-unstyled d-flex flex-row align-items-center'>
                <li className={active == "bio" ? 'mx-2 active' : "mx-2"}
                onClick={()=>setActive("bio")}><a href='#bio'>Bio</a></li>
                <li className={active == "education" ? 'mx-2 active' : "mx-2"}
                onClick={()=>setActive("education")}
                ><a href='#bio'>Education</a></li>
                <li className={active == "experience" ? 'mx-2 active' : "mx-2"}
                onClick={()=>setActive("experience")}><a href='#bio'>Experience</a></li>
            </ul>
            <div className={active!= "bio" ? "d-none " : ""} >
            <p className='ms-3 text-start '>
            I'm HADJADJI Mohamed Bachir Software engineer
            A motivated and responsible person, ambitious and positive with a good team spirit, 
            and very excellent skills in web / mobile development.

            </p>
            <div className='d-flex flex-row '>
                <ul className='col-5 list-unstyled ms-3'>
                    <li className='text-light text-start'> <span className='text-violet'>Age : ...  </span> 24 </li>
                    <li className='text-light text-start'> <span className='text-violet'>Freelance : ...  </span> Available </li>
                    <li className='text-light text-start'> <span className='text-violet'>Phone : ...  </span> +213 696 930 704 </li>
                
                </ul>
                <ul className='col-7 list-unstyled'>
                <li className='text-light text-start'> <span className='text-violet'>Nationality : ...  </span> Algerian </li>
                    <li className='text-light text-start'> <span className='text-violet'>Address : ...  </span> Bouchaoui 02 N° 35  ,Chéraga Algiers </li>
                    <li className='text-light text-start'> <span className='text-violet'>Email : ...  </span> mohamedbhadjadji@gmail.com </li>
                
                </ul>
            </div>
            </div>
            <div className={active!= "education" ? "d-none" : "mx-2 "}>
                    <h5 className='text-start bg-violet-gradient w-100 p-2 rounded'>USTHB</h5>
                    <h5 className='text-start  text-violet'>MASTER DEGREE</h5>
                    <p className='text-start text-light'>
                        Master in Software Engineering obtained in 2022
                    </p>
                    <h5 className='text-start bg-violet-gradient w-100 p-2 rounded'>USTHB</h5>
                    <h5 className='text-start  text-violet'>LICENCE DEGREE</h5>
                    <p className='text-start text-light'>
                    LICENCE in academic computing obtained in 2020
                    </p>
                    <h5 className='text-start bg-violet-gradient w-100 p-2 rounded'>CEIL BENI MESSOUS</h5>
                    <h5 className='text-start  text-violet'>ENGLISH COURSES B2</h5>
                    <p className='text-start text-light'>
                        Obtained in 2019
                    </p>
            </div>
            <div className={active!= "experience" ? "d-none" : "sized-card" }>
                    <div className='d-flex flex-row justify-content-center'>
                        <div className='col-5 mx-2'>
                        <h5 className='text-start bg-violet w-100 p-2 rounded'>BBC SCHOOL</h5>
                        <h5 className='text-start  text-violet'>IT MANAGER</h5>
                        <p className='text-start text-light'>
                            From 2018 till 2022
                        </p>
                                <ul>
                               <li>Develop and update company website pages</li>
                               <li>Plan and organize projects</li> 
                               <li>Coordinate with team members</li>
                                <li>Participate in meetings and write reports</li>

                                </ul>
                        <h5 className='text-start bg-violet w-100 p-2 rounded'>FREELANCE</h5>
                        <h5 className='text-start  text-violet'>WEB / MOBILE DEVELOPMENT</h5>
                        <p className='text-start text-light'>
                            Since 2019
                          
                        </p>
                        <ul>
                               <li>Collaborate with the client to set up a commercial register</li>
                               <li>Develop mobile and web applications according to customer requests</li> 

                        </ul>
                        <h5 className='text-start bg-violet w-100 p-2 rounded'>BBC SCHOOL</h5>
                        <h5 className='text-start  text-violet'>WEB DEVELOPMENT TEACHER</h5>
                        <p className='text-start text-light'>
                        From 2020 till 2021
                  

                        </p>
                        <ul>
                               <li>Teach HTML / CSS / JS lessons</li>
                           
                        </ul>
                            </div>
                        <div className='col-5 mx-2'>
                        
                        <h5 className='text-start bg-violet w-100 p-2 rounded'>NAFTAL</h5>
                        <h5 className='text-start  text-violet'>INTERNSHIP</h5>
                        <p className='text-start text-light'>
                        From February 2022 till june 2022
                    

                        </p>
                        <ul>
                               <li>Develop Web services using Spring boot</li>
                               <li>Creating a web application using Angular</li>
                               <li>Creation of two mobile applications using flutter</li>
                           
                        </ul>
                        <h5 className='text-start bg-violet w-100 p-2 rounded'>ADEX TECHNOLOGY</h5>
                        <h5 className='text-start  text-violet'>SOFTWARE ENGINEER</h5>
                        <p className='text-start text-light'>
                        From May 2022 till September 2022
                      

                        </p>
                        <ul>
                               <li>Develop Web applications using Laravel / React</li>
                               <li>Develop Mobile applications using react-native </li>
                           
                        </ul>
                        <h5 className='text-start bg-violet w-100 p-2 rounded'>NAFTAL</h5>
                        <h5 className='text-start  text-violet'>SOFTWARE ENGINEER</h5>
                        <p className='text-start text-light'>
                        From September 2022 till Now
                     
                        </p>
                        <ul>
                               <li>Develop Web applications using Laravel / React</li>
                               <li>Develop Mobile applications using flutter </li>
                                <li>Database Monitoring using zabbix</li>
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
