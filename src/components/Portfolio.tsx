import React from 'react'
import Web from './web'
import Mobile from './mobile'
import { useTranslation } from 'react-i18next';

function Portfolio() {
    const [active,setActive] = React.useState("All");
    const {t} = useTranslation();
  return (
    <div className='portfolio' id='portfolio'>
    <h1 className='page-title my-5 ' data-aos="fade-up" data-aos-duration="1500">PORTFOLIO</h1>
    <ul className='list-unstyled d-flex flex-row align-items-center justify-content-center'>
        <li className={active == "All" ? 'mx-2 active' : "mx-2"}
        onClick={()=>setActive("All")}><a href='#All'>{t('All')}</a></li>
        <li className={active == "Mobile" ? 'mx-2 active' : "mx-2"}
        onClick={()=>setActive("Mobile")}
        ><a href='#Mobile'>Mobile</a></li>
        <li className={active == "Web" ? 'mx-2 active' : "mx-2"}
        onClick={()=>setActive("Web")}><a href='#Web'>Web</a></li>
       
    </ul>
    <div className={active == "All" ? "":"d-none"}>
       
        <Web />
      
        <Mobile />
        
    </div>
    <div className={active == "Web" ? "":"d-none"}>
        <Web />
 
    </div>
    <div className={active == "Mobile" ? "":"d-none"}>
        <Mobile />
    
    </div>
    </div>
  )
}

export default Portfolio