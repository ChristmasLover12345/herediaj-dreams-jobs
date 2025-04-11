'use client'

import React from 'react'
import { ArrowLeft, MapPin, Users, Briefcase, Award } from 'lucide-react';
import { useRouter } from 'next/navigation';

const page = () => {

    const Router = useRouter()

    const GoBack = () => {
        Router.push(`/`)
    }

  return (
    
    <div className="bg-[#0a0a0a] min-h-screen p-6 text-[#d1f2a5]">
    <div className="max-w-6xl mx-auto">
      <div onClick={GoBack} className="inline-flex items-center text-[#76b900] hover:text-[#a5ff00] mb-6 cursor-pointer transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Go Back
      </div>
  
      <div className="bg-[#0f0f0f] rounded-xl shadow-2xl overflow-hidden border border-[#1c1c1c]">
        <div className="bg-[#76b900] text-black p-8">
          <div className="flex items-center">
            <div className="bg-white p-1 rounded-lg mr-6 shadow-md">
              <img src="./images/nvidia logo.png" alt="NVIDIA logo" className="w-28 h-28 rounded-md" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-black">NVIDIA</h1>
              <a href="https://nvidia.wd5.myworkdayjobs.com/en-US/NVIDIAExternalCareerSite/details/Full-Stack-Developer--AI-and-LLM_JR1996169-1?jobFamilyGroup=0c40f6bd1d8f10ae43ffaefd46dc7e78&locationHierarchy1=2fcb99c455831013ea52fb338f2932d8&locations=91336993fab910af6d716528e9d4c406" target='_blank'>
                <p className="text-xl mt-1 underline hover:text-[#2cfa00]">Full Stack Developer (AI/LLM)</p>
              </a>
              <div className="flex items-center mt-2 text-black">
                <MapPin className="w-4 h-4 mr-1" />
                <div>Santa Clara, CA</div>
              </div>
            </div>
          </div>
        </div>
  
        <div className="p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[#d1f2a5]">About the Company</h2>
            <p>
            NVIDIA is a technology company that evolved from creating graphics cards for gaming to becoming a dominant force in AI computing. Founded in 1993 and led by Jensen Huang, it designs GPUs and specialized chips that power artificial intelligence systems, data centers, and autonomous vehicles worldwide.
            </p>
          </div>
  
          <h2 className="text-2xl font-bold mb-6 text-[#d1f2a5]">Why I Want to Work Here</h2>
  
          <div className="grid gap-6 grid-cols-1 xl:grid-cols-3 mb-8">
            <div className="bg-[#0c0c0c] p-6 rounded-lg border border-[#2e2e2e]">
              <div className="flex items-center mb-3">
                <Users className="w-5 h-5 mr-2 text-[#76b900]" />
                <h3 className="text-xl font-semibold text-white">Culture</h3>
              </div>
              <p>
                NVIDIA encourages innovation and provides opportunities to explore new ways to succeed. Their collaborative, high-performance environment empowers developers to work on groundbreaking solutions.
              </p>
            </div>
  
            <div className="bg-[#0c0c0c] p-6 rounded-lg border border-[#2e2e2e]">
              <div className="flex items-center mb-3">
                <Briefcase className="w-5 h-5 mr-2 text-[#76b900]" />
                <h3 className="text-xl font-semibold text-white">Benefits</h3>
              </div>
              <p>
                Full-time role with competitive compensation, equity, and benefits. NVIDIA accepts applications on an ongoing basis and is known for valuing creativity and autonomy.
              </p>
            </div>
  
            <div className="bg-[#0c0c0c] p-6 rounded-lg border border-[#2e2e2e]">
              <div className="flex items-center mb-3">
                <MapPin className="w-5 h-5 mr-2 text-[#76b900]" />
                <h3 className="text-xl font-semibold text-white">Location</h3>
              </div>
              <p>
                Flexible work options: US, CA, Remote and Santa Clara. NVIDIA supports hybrid models and remote opportunities for talent across locations.
              </p>
            </div>
          </div>
  
          {/* Skills They're Looking For */}
          <div className="p-6 mb-8 bg-[#141414] rounded-lg border border-[#2e2e2e]">
            <h2 className="text-2xl font-bold mb-6 text-[#d1f2a5]">Skills They're Looking For</h2>
            <div className="flex flex-wrap gap-3">
              <div className="bg-[#76b900] text-black px-4 py-2 rounded-lg text-base font-medium flex items-center">
                <Award className="w-4 h-4 mr-2" />
                Full-stack development
              </div>
              <div className="bg-[#76b900] text-black px-4 py-2 rounded-lg text-base font-medium flex items-center">
                <Award className="w-4 h-4 mr-2" />
                AI/LLM Integration
              </div>
              <div className="bg-[#76b900] text-black px-4 py-2 rounded-lg text-base font-medium flex items-center">
                <Award className="w-4 h-4 mr-2" />
                Python & C++
              </div>
              <div className="bg-[#76b900] text-black px-4 py-2 rounded-lg text-base font-medium flex items-center">
                <Award className="w-4 h-4 mr-2" />
                Deep Learning Frameworks
              </div>
              <div className="bg-[#76b900] text-black px-4 py-2 rounded-lg text-base font-medium flex items-center">
                <Award className="w-4 h-4 mr-2" />
                Team Collaboration
              </div>
              <div className="bg-[#76b900] text-black px-4 py-2 rounded-lg text-base font-medium flex items-center">
                <Award className="w-4 h-4 mr-2" />
                Analytical Debug Skills
              </div>
            </div>
          </div>
  
          {/* My Skills */}
          <div className="p-6 bg-[#141414] rounded-lg border border-[#2e2e2e]">
            <h2 className="text-2xl font-bold mb-6 text-[#d1f2a5]">My Skills</h2>
            <div className="flex flex-wrap gap-3">
           
              <div className="bg-[#76b900] text-black px-4 py-2 rounded-lg text-base font-medium flex items-center">
                <Award className="w-4 h-4 mr-2" />
                Full-stack development
              </div>
              <div className="bg-[#76b900] text-black px-4 py-2 rounded-lg text-base font-medium flex items-center">
                <Award className="w-4 h-4 mr-2" />
                Team Collaboration
              </div>
              <div className="bg-[#76b900] text-black px-4 py-2 rounded-lg text-base font-medium flex items-center">
                <Award className="w-4 h-4 mr-2" />
                Javascript
              </div>
              <div className="bg-[#76b900] text-black px-4 py-2 rounded-lg text-base font-medium flex items-center">
                <Award className="w-4 h-4 mr-2" />
                C#
              </div>
              <div className="bg-[#76b900] text-black px-4 py-2 rounded-lg text-base font-medium flex items-center">
                <Award className="w-4 h-4 mr-2" />
                SQL
              </div>
              <div className="bg-[#76b900] text-black px-4 py-2 rounded-lg text-base font-medium flex items-center">
                <Award className="w-4 h-4 mr-2" />
                React
              </div>
              <div className="bg-[#76b900] text-black px-4 py-2 rounded-lg text-base font-medium flex items-center">
                <Award className="w-4 h-4 mr-2" />
                Next.js
              </div>
              <div className="bg-[#76b900] text-black px-4 py-2 rounded-lg text-base font-medium flex items-center">
                <Award className="w-4 h-4 mr-2" />
                Tailwind
              </div>
              <div className="bg-[#76b900] text-black px-4 py-2 rounded-lg text-base font-medium flex items-center">
                <Award className="w-4 h-4 mr-2" />
                Rest API
              </div>
              
            
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  )
}

export default page