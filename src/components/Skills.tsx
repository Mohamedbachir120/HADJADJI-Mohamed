import React from 'react'
import Skill from './Skill';

const  Skills:React.FC =() => {
    const [active,setActive] = React.useState("FRAMEWORKS");

  return (
    <div  className='skill' id="skill">
    <h1 className='page-title my-5 ' data-aos="fade-up" data-aos-duration="1500">SKILL</h1>
    <ul className='list-unstyled d-flex flex-row align-items-center justify-content-center'>
        <li className={active == "FRAMEWORKS" ? 'mx-2 active' : "mx-2"}
        onClick={()=>setActive("FRAMEWORKS")}><a href='#FRAMEWORKS'>FRAMEWORKS</a></li>
        <li className={active == "Programming languages" ? 'mx-2 active' : "mx-2"}
        onClick={()=>setActive("Programming languages")}
        ><a href='#Programminglanguages'>PROGRAMMING LANGUAGES</a></li>
        <li className={active == "Databases" ? 'mx-2 active' : "mx-2"}
        onClick={()=>setActive("Databases")}><a href='#Databases'>DATABASES</a></li>
            <li className={active == "OS" ? 'mx-2 active' : "mx-2"}
        onClick={()=>setActive("OS")}><a href='#OS'>OS</a></li>
            <li className={active == "TOOLS" ? 'mx-2 active' : "mx-2"}
        onClick={()=>setActive("TOOLS")}><a href='#TOOLS'>TOOLS</a></li>
    </ul>
    <div className={active== "FRAMEWORKS" ?'d-flex flex-column align-items-center mb-5':"d-none"}>
        <Skill  data={{title:"FLUTTER",mark:9}}/>
        <Skill  data={{title:"LARAVEL",mark:9}}/>
        <Skill  data={{title:"BOOTSTRAP",mark:9}}/>
        <Skill  data={{title:"REACT",mark:8}}/>

        <Skill  data={{title:"DJANGO",mark:7}}/>
        <Skill  data={{title:"ANGULAR",mark:7}}/>
        <Skill  data={{title:"SPRING BOOT",mark:7}}/>
    </div>
    <div className={active== "Programming languages" ?'d-flex flex-column align-items-center mb-5':"d-none"}>
        <Skill  data={{title:"DART",mark:9}}/>
        <Skill  data={{title:"Java Script",mark:9}}/>
        <Skill  data={{title:"JAVA",mark:9}}/>
        <Skill  data={{title:"PYTHON",mark:9}}/>
        <Skill  data={{title:"PHP",mark:9}}/>
        <Skill  data={{title:"HTML / CSS",mark:9}}/>
        <Skill  data={{title:"C",mark:8}}/>
        <Skill  data={{title:"Type Script",mark:8}}/>


    </div>
    <div className={active== "Databases" ?'d-flex flex-column align-items-center mb-5':"d-none"}>
        <Skill  data={{title:"MYSQL",mark:9}}/>
        <Skill  data={{title:"ORACLE",mark:9}}/>
        <Skill  data={{title:"SQL Server",mark:8}}/>
        <Skill  data={{title:"SQLITE",mark:8}}/>

    </div>
    <div className={active== "OS" ?'d-flex flex-column align-items-center mb-5':"d-none"}>
        <Skill  data={{title:"WINDOWS",mark:9}}/>
        <Skill  data={{title:"MAC OS",mark:9}}/>
        <Skill  data={{title:"UBUNTU",mark:9}}/>
        <Skill  data={{title:"RedHAT",mark:8}}/>
        <Skill  data={{title:"CENTOS",mark:8}}/>

    </div>
    <div className={active== "TOOLS" ?'d-flex flex-column align-items-center mb-5':"d-none"}>
        <Skill  data={{title:"POSTMAN",mark:9}}/>
        <Skill  data={{title:"GIT",mark:9}}/>
        <Skill  data={{title:"Android studio",mark:8}}/>
        <Skill  data={{title:"ZABBIX",mark:8}}/>

    </div>
    </div>
  )
}

export default Skills