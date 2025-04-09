'use client'


import { MediaCardProps } from '@/utils/interface';
import React, { useRef, useState } from 'react'

const JobBarComponent = ({
  background,
  imageOnRight,
  LogoUrl,
  LogoSize,
  Description,
  textColor,
  ButtonColor,
  cardTitle,
  cardImageUrl,
  cardVideoUrl,
  cardAudioUrl,
}: MediaCardProps) => {

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
    
   <div className={`relative flex w-full justify-around h-[500px] flex-row p-8 ${background} ${imageOnRight ? 'flex-row-reverse' : 'flex-row'}`}>

    <img src={LogoUrl} alt="logo" className={`absolute ${LogoSize} ${imageOnRight ? 'start-5 top-5' : 'end-5 top-5'}`}/>

    <div className="relative w-[40%] h-[90%] self-center rounded-2xl overflow-hidden shadow-lg group cursor-pointer transform transition-transform duration-300 hover:scale-105"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image (visible when not hovered) */}
      <img
        src={cardImageUrl}
        alt={cardTitle}
        className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
          hovered ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Video (visible on hover) */}
      <video
        ref={videoRef}
        src={cardVideoUrl}
        muted
        loop
        className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Title */}
      <div className="absolute bottom-4 left-4 z-10">
        <h2 className="text-white text-3xl font-semibold drop-shadow-md">{cardTitle}</h2>
      </div>

      {/* Audio */}
      <audio loop ref={audioRef} src={cardAudioUrl} />
    </div>

    <div className='flex flex-col w-[55%] self-center h-full items-center justify-end'>

      <div className='w-full h-[80%] overflow-hidden pb-2'>

        <h3 className={`text-2xl font-semibold ${textColor} ${imageOnRight ? 'text-start' : 'text-end'}`}>

          {Description}

        </h3>

      </div>

      <div className={`flex w-full h-[10%] ${imageOnRight ? 'justify-start' : 'justify-end'}`}>

        <button className={`rounded-lg ${ButtonColor} ${textColor} border-[1px] shadow-2xl px-2 cursor-pointer transform transition-transform duration-300 hover:scale-105`}> Learn More </button>

      </div>

    </div>

   </div>

  )
}

export default JobBarComponent