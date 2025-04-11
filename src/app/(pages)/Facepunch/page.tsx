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
            <img src="./images/faceounchLogo.png" alt="Facepunch Studios logo" className="w-28 h-28 rounded-md" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#f2f2f2]">Facepunch Studios</h1>
            <a href="https://facepunch.com/careers/devops-engineer" target='_blank'>
              <p className="text-xl mt-1 underline hover:text-[#ffd1d1]">DevOps Engineer</p>
            </a>
            <div className="flex items-center mt-2 text-[#f2f2f2]">
              <MapPin className="w-4 h-4 mr-1" />
              <div>Birmingham, England</div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-[#f2f2f2]">About the Company</h2>
          <p>
            Facepunch Studios is the creative force behind games like *Rust* and *Garry’s Mod*.
            They are known for their experimental approach to development, empowering small, agile teams 
            to build exciting experiences while maintaining a strong focus on community and innovation.
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
              Facepunch empowers engineers to take ownership of their work, encouraging creative freedom 
              and strong collaboration across remote and in-house teams.
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#3a3a3a]">
            <div className="flex items-center mb-3">
              <Briefcase className="w-5 h-5 mr-2 text-[#4099ff]" />
              <h3 className="text-xl font-semibold text-white">Benefits</h3>
            </div>
            <p>
              Competitive salary (£55k–£78k), generous holidays, and a bonus scheme of up to 100% of your 
              salary after one year. Work remote, hybrid, or on-site.
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#3a3a3a]">
            <div className="flex items-center mb-3">
              <MapPin className="w-5 h-5 mr-2 text-[#4099ff]" />
              <h3 className="text-xl font-semibold text-white">Location</h3>
            </div>
            <p>
              The team is flexible—join them from anywhere, or collaborate in person. The studio fosters 
              a productive environment no matter where you&#39;re based.
            </p>
          </div>
        </div>

        {/* Skills They're Looking For */}
        <div className="p-6 mb-8 bg-[#292929] rounded-lg border border-[#444444]">
          <h2 className="text-2xl font-bold mb-6 text-[#f2f2f2]">Skills They&#39;re Looking For</h2>
          <div className="flex flex-wrap gap-3">
            <div className="bg-[#e5484d] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
              <Award className="w-4 h-4 mr-2" />
              Windows Server
            </div>
            <div className="bg-[#e5484d] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
              <Award className="w-4 h-4 mr-2" />
              Microsoft Azure
            </div>
            <div className="bg-[#e5484d] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
              <Award className="w-4 h-4 mr-2" />
              GitHub Actions
            </div>
            <div className="bg-[#e5484d] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
              <Award className="w-4 h-4 mr-2" />
              Unity Version Control
            </div>
            <div className="bg-[#e5484d] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
              <Award className="w-4 h-4 mr-2" />
              MSSQL / Azure Data Explorer
            </div>
            <div className="bg-[#e5484d] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
              <Award className="w-4 h-4 mr-2" />
              Server Security & HA
            </div>
            <div className="bg-[#e5484d] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
              <Award className="w-4 h-4 mr-2" />
              Jenkins
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
              Microsoft Azure
            </div>
            <div className="bg-[#4099ff] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
              <Award className="w-4 h-4 mr-2" />
              Team Collaboration
            </div>
            <div className="bg-[#4099ff] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
              <Award className="w-4 h-4 mr-2" />
              Javascript
            </div>
            <div className="bg-[#4099ff] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
              <Award className="w-4 h-4 mr-2" />
              C#
            </div>
            <div className="bg-[#4099ff] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
              <Award className="w-4 h-4 mr-2" />
              SQL
            </div>
            <div className="bg-[#4099ff] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
              <Award className="w-4 h-4 mr-2" />
              Next.js
            </div>
            <div className="bg-[#4099ff] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
              <Award className="w-4 h-4 mr-2" />
              React
            </div>
            <div className="bg-[#4099ff] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
              <Award className="w-4 h-4 mr-2" />
              Tailwind
            </div>
            <div className="bg-[#4099ff] text-white px-4 py-2 rounded-lg text-base font-medium flex items-center">
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