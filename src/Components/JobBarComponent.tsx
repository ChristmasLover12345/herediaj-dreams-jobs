'use client'


import React from 'react'

const JobBarComponent = (props: {background: string, imageOnRight: boolean, LogoUrl: string,}) => {
  return (
    
   <div className={`relative flex w-full flex-row ${"bg-[#" + props.background + "]" } ${props.imageOnRight ? 'xl:flex-row-reverse' : 'xl:flex-row'}`}>

    <img src={props.LogoUrl} alt="logo" className={`absolute h-[48px] w-[48px] ${props.imageOnRight ? 'end-1 top-1' : 'start-1 top-1'}`}/>

    

   </div>

  )
}

export default JobBarComponent