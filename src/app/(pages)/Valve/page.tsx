'use client'

import React from 'react'
import { ArrowLeft, MapPin, Users, Briefcase, Heart, Award } from 'lucide-react';
import { useRouter } from 'next/navigation';

const page = () => {

    const router = useRouter()

    const GoBack = () => {
        router.push(`/`)
    }

  return (
    
    <div className="bg-[#1b1b1b] min-h-screen p-6 text-[#d4d4d4]">
    {/* Container */}
    <div className="max-w-6xl mx-auto">
      {/* Back button */}
      <div onClick={GoBack} className="inline-flex items-center text-[#f27847] hover:underline mb-6 cursor-pointer">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Go Back
      </div>

      <div className="bg-[#2e2e2e] rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-[#c7000a] text-white p-8">
          <div className="flex items-center">
            <div className="bg-white p-1 rounded-lg mr-6">
              <img src="./images/ValveOldLogo.webp" alt="Valve Corporation logo" className="w-28 h-28" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Valve Corporation</h1>
              <a href="https://www.valvesoftware.com/en/jobs?job_id=51" target='_blank'>
                <p className="text-xl mt-1 underline hover:text-gray-300">Game Developer</p>
              </a>
              
              <div className="flex items-center mt-2">
                <MapPin className="w-4 h-4 mr-1" />
                <div>Bellevue, Washington</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">About the Company</h2>
            <p className="text-[#d4d4d4]">
              Valve is a developer of gaming software, hardware, and an online gaming platform.
              The company is known for games like Half-Life, Portal, and Counter-Strike, as well
              as for Steam, a digital distribution platform.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-6">Why I Want to Work Here</h2>

          {/* Reasons sections */}
          <div className="grid gap-6 grid-cols-1 xl:grid-cols-3 mb-8">
            <div className="bg-[#1b1b1b] text-[#d4d4d4] p-6 rounded-lg border border-[#444444]">
              <div className="flex items-center mb-3">
                <Users className="w-5 h-5 mr-2 text-[#3a9efd]" />
                <h3 className="text-xl font-semibold">Culture</h3>
              </div>
              <p>
                Valve's organizational structure means no bosses and the freedom to work on
                projects you're passionate about. 
              </p>
            </div>

            <div className="bg-[#1b1b1b] text-[#d4d4d4] p-6 rounded-lg border border-[#444444]">
              <div className="flex items-center mb-3">
                <Briefcase className="w-5 h-5 mr-2 text-[#3a9efd]" />
                <h3 className="text-xl font-semibold">Benefits</h3>
              </div>
              <p>
                Comprehensive health coverage, relocation assistance, free snacks and drinks,
                annual company trip, profit sharing, and flexible working hours. Valve is known
                for taking care of their employees with competitive compensation.
              </p>
            </div>

            <div className="bg-[#1b1b1b] text-[#d4d4d4] p-6 rounded-lg border border-[#444444]">
              <div className="flex items-center mb-3">
                <MapPin className="w-5 h-5 mr-2 text-[#3a9efd]" />
                <h3 className="text-xl font-semibold">Location</h3>
              </div>
              <p>
                Located in scenic Bellevue, Washington with beautiful views of the Pacific Northwest.
                The area has a thriving tech scene, outdoor activities, and no state income tax.
              </p>
            </div>
          </div>

          {/* Skills They're Looking For */}
          <div className="p-6 mb-8 bg-[#2e2e2e] rounded-lg border border-[#444444]">
            <h2 className="text-2xl font-bold mb-6 text-white">Skills They're Looking For</h2>
            <div className="flex flex-wrap gap-3">
                <div className="bg-[#f27847] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
                <Award className="w-4 h-4 mr-2" />
                C++
                </div>
                <div className="bg-[#f27847] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
                <Award className="w-4 h-4 mr-2" />
                Game Design
                </div>
                <div className="bg-[#f27847] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
                <Award className="w-4 h-4 mr-2" />
                3D Graphics
                </div>
                <div className="bg-[#f27847] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
                <Award className="w-4 h-4 mr-2" />
                Physics Simulation
                </div>
                <div className="bg-[#f27847] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
                <Award className="w-4 h-4 mr-2" />
                User Experience
                </div>
                <div className="bg-[#f27847] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
                <Award className="w-4 h-4 mr-2" />
                Team Player
                </div>
                <div className="bg-[#f27847] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
                <Award className="w-4 h-4 mr-2" />
                Version Control
                </div>
            </div>
            </div>

            {/* My Skills */}
            <div className="p-6 bg-[#2e2e2e] rounded-lg border border-[#444444]">
            <h2 className="text-2xl font-bold mb-6 text-white">My Skills</h2>
            <div className="flex flex-wrap gap-3">
            <div className="bg-[#3a9efd] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
                <Award className="w-4 h-4 mr-2" />
                Version Control
                </div>
                <div className="bg-[#3a9efd] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
                <Award className="w-4 h-4 mr-2" />
                3D Graphics
                </div>
                <div className="bg-[#3a9efd] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
                <Award className="w-4 h-4 mr-2" />
                User Experience
                </div>
                <div className="bg-[#3a9efd] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
                <Award className="w-4 h-4 mr-2" />
                Javascript
                </div>
                <div className="bg-[#3a9efd] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
                <Award className="w-4 h-4 mr-2" />
                C#
                </div>
                <div className="bg-[#3a9efd] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
                <Award className="w-4 h-4 mr-2" />
                SQL
                </div>
                <div className="bg-[#3a9efd] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
                <Award className="w-4 h-4 mr-2" />
                Next.js
                </div>
                <div className="bg-[#3a9efd] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
                <Award className="w-4 h-4 mr-2" />
                React
                </div>
                <div className="bg-[#3a9efd] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
                <Award className="w-4 h-4 mr-2" />
                Tailwind
                </div>
                <div className="bg-[#3a9efd] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
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