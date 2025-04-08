'use client'

import React, { useRef, useState } from 'react'

const JobCardComponent = (props: {title: string, imageUrl: string, videoUrl: string, audioUrl: string}) => {


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
    <div>

<div
      className="relative w-[400px] h-[250px] rounded-2xl overflow-hidden shadow-lg group cursor-pointer transform transition-transform duration-300 hover:scale-125"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image (visible when not hovered) */}
      <img
        src={props.imageUrl}
        alt={props.title}
        className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
          hovered ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Video (visible on hover) */}
      <video
        ref={videoRef}
        src={props.videoUrl}
        muted
        loop
        className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Title */}
      <div className="absolute bottom-4 left-4 z-10">
        <h2 className="text-white text-xl font-semibold drop-shadow-md">{props.title}</h2>
      </div>

      {/* Audio */}
      <audio loop ref={audioRef} src={props.audioUrl} />
    </div>

    </div>
  )
}

export default JobCardComponent