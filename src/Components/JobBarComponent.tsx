'use client'


import React, { useRef, useState } from 'react'

const JobBarComponent = (props: {background: string, imageOnRight: boolean, LogoUrl: string, CardtTitle: string, CardImageUrl: string, CardVideoUrl: string, CardAudioUrl: string}) => {

   const [hovered, setHovered] = useState(false);
      const videoRef = useRef<HTMLVideoElement>(null);
      const audioRef = useRef<HTMLAudioElement>(null);
    
      const handleMouseEnter = () => {
        setHovered(true);
        videoRef.current?.play();
        audioRef.current?.play();
      };
    
      const handleMouseLeave = () => {
        setHovered(false);
        videoRef.current?.pause();
        videoRef.current!.currentTime = 0;
        audioRef.current?.pause();
        audioRef.current!.currentTime = 0;
      };

  return (
    
   <div className={`relative flex w-full flex-row ${"bg-[#" + props.background + "]" } ${props.imageOnRight ? 'flex-row-reverse' : 'flex-row'}`}>

    <img src={props.LogoUrl} alt="logo" className={`absolute h-[48px] w-[48px] ${props.imageOnRight ? 'end-1 top-1' : 'start-1 top-1'}`}/>

    <div
      className="relative w-[40%] h-full rounded-2xl overflow-hidden shadow-lg group cursor-pointer transform transition-transform duration-300 hover:scale-105"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image (visible when not hovered) */}
      <img
        src={props.CardImageUrl}
        alt={props.CardtTitle}
        className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
          hovered ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Video (visible on hover) */}
      <video
        ref={videoRef}
        src={props.CardVideoUrl}
        muted
        loop
        className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Title */}
      <div className="absolute bottom-4 left-4 z-10">
        <h2 className="text-white text-3xl font-semibold drop-shadow-md">{props.CardtTitle}</h2>
      </div>

      {/* Audio */}
      <audio loop ref={audioRef} src={props.CardAudioUrl} />
    </div>

    <div className='flex flex-col w-[60%] h-full items-center'>

      <div className='w-full h-[80%] overflow-hidden pb-2'>

        <h3></h3>

      </div>

      <div className={`flex w-full h-[20%] ${props.imageOnRight ? 'justify-end' : 'justify-start'}`}>

        <button className=''> Learn More </button>

      </div>

    </div>

   </div>

  )
}

export default JobBarComponent