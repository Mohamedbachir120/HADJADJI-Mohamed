import React from 'react'

const  Skill:React.FC<{data:{title:string,mark:number}}> = ({data}) => {
    const tab = [0,1,2,3,4,5,6,7,8,9]
  return (
    <div className='d-flex flex-row  align-items-center justify-content-start skill-item '>
       <h5 className='text-light  pt-2 col-3 text-start'>{data.title}</h5>
       <div className='col-9 d-flex flex-row justify-content-start'>
       {
        tab.map((e)=>{
            if(e < data.mark) return (<div className='circle-enabled bg-violet mx-1' key={e+data.title}></div>)
            else return (<div key={e+data.title} className='circle-disabled bg-dark mx-1'></div>)
        })
       } 
       </div>
        </div>
    
  )
}

export default Skill