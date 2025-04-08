'use client'

import { JobBar } from '@/utils/interface'
import React from 'react'

const JobBarComponent = (props: {background: string, imageOnRight: boolean,}) => {
  return (
    
   <div className={`flex flex-row ${"bg-[#" + props.background + "]" } ${props.imageOnRight ? 'xl:flex-row-reverse' : 'xl:flex-row'}`}>

   </div>

  )
}

export default JobBarComponent