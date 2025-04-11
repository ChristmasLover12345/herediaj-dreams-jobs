'use client'

import React from 'react'
import { ArrowLeft, MapPin, Users, Briefcase, Award } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Page = () => {

    const router = useRouter()

    const GoBack = () => {
        router.push(`/`)
    }

  return (
    
    <div className="bg-[#1a1d21] min-h-screen p-6 text-[#e4e4e7] font-sans">
  <div className="max-w-6xl mx-auto">
    <div onClick={GoBack} className="inline-flex items-center text-[#4db8ff] hover:text-[#8cdcff] mb-6 cursor-pointer transition-colors">
      <ArrowLeft className="w-4 h-4 mr-2" />
      Go Back
    </div>

    <div className="bg-[#23272e] rounded-2xl shadow-xl overflow-hidden border border-[#2e333b]">
      <div className="bg-[#2c3e50] text-white p-8">
        <div className="flex items-center">
          <div className="bg-[#1e2126] p-1 rounded-lg mr-6 shadow-md border border-[#3c3c3c]">
            <img src="./images/robloxLogo.png" alt="Roblox logo" className="w-28 h-28 rounded-md" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Roblox</h1>
            <a href="https://careers.roblox.com/jobs/6382706" target='_blank'>
             <p className="text-xl mt-1 underline text-[#4db8ff] hover:text-[#a4e3ff]">Principal Software Engineer, Account Authentication</p>
            </a>
           

            <div className="flex items-center mt-2 text-[#d1d5db]">
              <MapPin className="w-4 h-4 mr-1" />
              San Mateo, CA
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">About the Company</h2>
          <p className="text-[#c5cbd3]">
            Roblox is reimagining the way people come together from anywhere in the world and on any device. With tens of millions of users daily, it offers immersive digital experiences created by a global community of developers.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-white">Why I Want to Work Here</h2>

        <div className="grid gap-6 grid-cols-1 xl:grid-cols-3 mb-8">
          <div className="bg-[#1e2227] p-6 rounded-xl border border-[#2f343b]">
            <div className="flex items-center mb-3">
              <Users className="w-5 h-5 mr-2 text-[#4db8ff]" />
              <h3 className="text-xl font-semibold text-white">Culture</h3>
            </div>
            <p className="text-[#bdc3c7]">
              Roblox&#39;s mission to connect a billion people with optimism and civility stands out. The entrepreneurial nature of the team and impact-driven projects reflect a culture that encourages initiative and innovation.
            </p>
          </div>

          <div className="bg-[#1e2227] p-6 rounded-xl border border-[#2f343b]">
            <div className="flex items-center mb-3">
              <Briefcase className="w-5 h-5 mr-2 text-[#4db8ff]" />
              <h3 className="text-xl font-semibold text-white">Benefits</h3>
            </div>
            <p className="text-[#bdc3c7]">
              Roblox offers top-tier compensation, equity, healthcare, flexible vacation, fitness programs, and more, including an Admin badge for your avatar. It’s a place where work-life balance and well-being are truly supported.
            </p>
          </div>

          <div className="bg-[#1e2227] p-6 rounded-xl border border-[#2f343b]">
            <div className="flex items-center mb-3">
              <MapPin className="w-5 h-5 mr-2 text-[#4db8ff]" />
              <h3 className="text-xl font-semibold text-white">Location</h3>
            </div>
            <p className="text-[#bdc3c7]">
              Based in San Mateo, CA, with flexible in-office scheduling. A modern workplace offering collaborative spaces and daily catered lunches, plus a hybrid work environment with Roflex flexibility.
            </p>
          </div>
        </div>

        <div className="p-6 mb-8 bg-[#1a1d21] rounded-xl border border-[#2f343b]">
          <h2 className="text-2xl font-bold mb-6 text-white">Skills They&#39;re Looking For</h2>
          <div className="flex flex-wrap gap-3">
            <div className="bg-[#3e5c7f] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
              <Award className="w-4 h-4 mr-2" />
              Account Security & Identity
            </div>
            <div className="bg-[#3e5c7f] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
              <Award className="w-4 h-4 mr-2" />
              Full Stack Engineering
            </div>
            <div className="bg-[#3e5c7f] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
              <Award className="w-4 h-4 mr-2" />
              C#, C++, GoLang, or Lua
            </div>
            <div className="bg-[#3e5c7f] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
              <Award className="w-4 h-4 mr-2" />
              Cross-functional Collaboration
            </div>
            <div className="bg-[#3e5c7f] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
              <Award className="w-4 h-4 mr-2" />
              Analytical & Strategic Thinking
            </div>
            <div className="bg-[#3e5c7f] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
              <Award className="w-4 h-4 mr-2" />
              Security & Usability Improvements
            </div>
          </div>
        </div>

        <div className="p-6 bg-[#1a1d21] rounded-xl border border-[#2f343b]">
          <h2 className="text-2xl font-bold mb-6 text-white">My Skills</h2>
          <div className="flex flex-wrap gap-3">
            <div className="bg-[#3e5c7f] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
              <Award className="w-4 h-4 mr-2" />
              Full-stack development
            </div>
            <div className="bg-[#3e5c7f] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
              <Award className="w-4 h-4 mr-2" />
              Team Collaboration
            </div>
            <div className="bg-[#3e5c7f] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
              <Award className="w-4 h-4 mr-2" />
              Javascript
            </div>
            <div className="bg-[#3e5c7f] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
              <Award className="w-4 h-4 mr-2" />
              C#
            </div>
            <div className="bg-[#3e5c7f] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
              <Award className="w-4 h-4 mr-2" />
              SQL
            </div>
            <div className="bg-[#3e5c7f] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
              <Award className="w-4 h-4 mr-2" />
              React
            </div>
            <div className="bg-[#3e5c7f] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
              <Award className="w-4 h-4 mr-2" />
              Next.js
            </div>
            <div className="bg-[#3e5c7f] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
              <Award className="w-4 h-4 mr-2" />
              Tailwind
            </div>
            <div className="bg-[#3e5c7f] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
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

export default Page