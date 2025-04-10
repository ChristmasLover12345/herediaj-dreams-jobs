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
    
    // REMEMBER TO CHANGE ALL THE INFO ON THE PAGE TO FACE PUNCH STUFF
    <div className="bg-[#111111] min-h-screen p-6 text-[#e0e0e0]">
      <div className="max-w-6xl mx-auto">
        <div onClick={GoBack} className="inline-flex items-center text-[#e5484d] hover:text-[#ff6d6d] mb-6 cursor-pointer transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Go Back
        </div>

        <div className="bg-[#222222] rounded-xl shadow-2xl overflow-hidden border border-[#333333]">
          <div className="bg-[#e5484d] text-white p-8">
            <div className="flex items-center">
              <div className="bg-white p-1 rounded-lg mr-6 shadow-md">
                <img src="./images/ValveOldLogo.webp" alt="Valve Corporation logo" className="w-28 h-28 rounded-md" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-[#f2f2f2]">Valve Corporation</h1>
                <a href="https://www.valvesoftware.com/en/jobs?job_id=51" target='_blank'>
                  <p className="text-xl mt-1 underline hover:text-[#ffd1d1]">Game Developer</p>
                </a>
                <div className="flex items-center mt-2 text-[#f2f2f2]">
                  <MapPin className="w-4 h-4 mr-1" />
                  <div>Bellevue, Washington</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[#f2f2f2]">About the Company</h2>
              <p>
                Valve is a developer of gaming software, hardware, and an online gaming platform.
                The company is known for games like Half-Life, Portal, and Counter-Strike, as well
                as for Steam, a digital distribution platform.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-[#f2f2f2]">Why I Want to Work Here</h2>

            <div className="grid gap-6 grid-cols-1 xl:grid-cols-3 mb-8">
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#3a3a3a]">
                <div className="flex items-center mb-3">
                  <Users className="w-5 h-5 mr-2 text-[#4099ff]" />
                  <h3 className="text-xl font-semibold text-white">Culture</h3>
                </div>
                <p>
                  Valve's organizational structure means no bosses and the freedom to work on
                  projects you're passionate about.
                </p>
              </div>

              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#3a3a3a]">
                <div className="flex items-center mb-3">
                  <Briefcase className="w-5 h-5 mr-2 text-[#4099ff]" />
                  <h3 className="text-xl font-semibold text-white">Benefits</h3>
                </div>
                <p>
                  Comprehensive health coverage, relocation assistance, free snacks and drinks,
                  annual company trip, profit sharing, and flexible working hours. Valve is known
                  for taking care of their employees with competitive compensation.
                </p>
              </div>

              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#3a3a3a]">
                <div className="flex items-center mb-3">
                  <MapPin className="w-5 h-5 mr-2 text-[#4099ff]" />
                  <h3 className="text-xl font-semibold text-white">Location</h3>
                </div>
                <p>
                  Located in scenic Bellevue, Washington with beautiful views of the Pacific Northwest.
                  The area has a thriving tech scene, outdoor activities, and no state income tax.
                </p>
              </div>
            </div>

            {/* Skills They're Looking For */}
            <div className="p-6 mb-8 bg-[#292929] rounded-lg border border-[#444444]">
              <h2 className="text-2xl font-bold mb-6 text-[#f2f2f2]">Skills They're Looking For</h2>
              <div className="flex flex-wrap gap-3">
                <div className="bg-[#e5484d] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  C++
                </div>
                <div className="bg-[#e5484d] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  Game Design
                </div>
                <div className="bg-[#e5484d] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  3D Graphics
                </div>
                <div className="bg-[#e5484d] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  Physics Simulation
                </div>
                <div className="bg-[#e5484d] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  User Experience
                </div>
                <div className="bg-[#e5484d] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  Team Player
                </div>
                <div className="bg-[#e5484d] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  Version Control
                </div>
              </div>
            </div>

            {/* My Skills */}
            <div className="p-6 bg-[#292929] rounded-lg border border-[#444444]">
              <h2 className="text-2xl font-bold mb-6 text-[#f2f2f2]">My Skills</h2>
              <div className="flex flex-wrap gap-3">
                <div className="bg-[#4099ff] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  Version Control
                </div>
                <div className="bg-[#4099ff] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  3D Graphics
                </div>
                <div className="bg-[#4099ff] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  User Experience
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