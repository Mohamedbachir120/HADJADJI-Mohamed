import React from 'react'
import Skill from './Skill';
import { Button } from 'react-bootstrap';
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
const  Skills:React.FC =() => {
    const {t} = useTranslation();
    const [active,setActive] = React.useState("FRAMEWORKS");
    const skills = ["FRAMEWORKS","PROGRAMMING LANGUAGES","Databases","OS","TOOLS"];
    function findPrevious(){
        let next = skills.indexOf(active)
        if(next == 0){

            setActive(skills[skills.length - 1])
        }else{
            setActive(skills[next-1])
        }
    }
    function findNext(){
        let next = skills.indexOf(active)
        if(next == skills.length - 1){

            setActive(skills[0])
        }else{
            setActive(skills[next+1])
        }
    }
  return (
    <div  className='skill' id="skill">
    <h1 className='page-title my-5 ' data-aos="fade-up" data-aos-duration="1500">{t('SKILL')}</h1>
   <div className='d-none d-lg-block'>

    <ul className=' skills-list list-unstyled d-flex flex-row align-items-center justify-content-center'>
        {skills.map((e)=>
        (<li key={e} className={active == e ? 'mx-2 active' : "mx-2"}
        onClick={()=>setActive(e)}><a href='#SKILLS'>{t(e)}</a></li>))}        
    
    </ul>
   </div>
   <div className='d-lg-none d-flex flex-row justify-content-center align-items-start' >
    <div className='mt-1 mx-2 col-2'>

    <Button className='bg-violet rounded-circle px-2' onClick={findPrevious}><FaArrowCircleLeft   /> </Button>         
    </div>
    <ul className='col-8 skills-list list-unstyled d-flex flex-row align-items-center justify-content-center'>
        {skills.map((e)=>{
         if( e== active)  return (<li key={e} className={active == e ? 'mx-2 active' : "mx-2"}
            onClick={()=>setActive(e)}><a href='#SKILLS'>{t(e)}</a></li>)
        }
        )}        
    
    </ul>
    <div className='mt-1 mx-2 col-2'>

        <Button className='bg-violet rounded-circle px-2' onClick={findNext}><FaArrowCircleRight   /> </Button>         
    </div>
   </div>
    <div className={active== "FRAMEWORKS" ?'d-flex flex-column align-items-center mb-5':"d-none"}>
        <Skill  data={{title:"FLUTTER",mark:9}}/>
        <Skill  data={{title:"LARAVEL",mark:9}}/>
        <Skill  data={{title:"BOOTSTRAP",mark:9}}/>
        <Skill  data={{title:"REACT",mark:8}}/>

        <Skill  data={{title:"DJANGO",mark:7}}/>
        <Skill  data={{title:"ANGULAR",mark:7}}/>
        <Skill  data={{title:"SPRING BOOT",mark:7}}/>
    </div>
    <div className={active== "PROGRAMMING LANGUAGES" ?'d-flex flex-column align-items-center mb-5':"d-none"}>
        <Skill  data={{title:"DART",mark:9}}/>
        <Skill  data={{title:"Java Script",mark:9}}/>
        <Skill  data={{title:"JAVA",mark:9}}/>
        <Skill  data={{title:"PYTHON",mark:9}}/>
        <Skill  data={{title:"PHP",mark:9}}/>
        <Skill  data={{title:"HTML / CSS",mark:9}}/>
        <Skill  data={{title:"C Language",mark:8}}/>
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