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
    
    <div className="bg-[#1c1c1c] min-h-screen p-6 text-[#e0e0e0]">
  <div className="max-w-6xl mx-auto">
    <div onClick={GoBack} className="inline-flex items-center text-[#4e9eff] hover:text-[#7fbfff] mb-6 cursor-pointer transition-colors">
      <ArrowLeft className="w-4 h-4 mr-2" />
      Go Back
    </div>

    <div className="bg-[#2a2a2a] rounded-xl shadow-2xl overflow-hidden border border-[#3a3a3a]">
      <div className="bg-[#4e9eff] text-black p-8">
        <div className="flex items-center">
          <div className="bg-white p-1 rounded-lg mr-6 shadow-md">
            <img src="./images/unityNoText.png" alt="Unity logo" className="w-28 h-28 rounded-md" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-black">Unity</h1>
            <a href="https://unity.com/careers/positions/6705622" target='_blank'>
              <p className="text-xl mt-1 underline hover:text-gray-800">Data Engineer</p>
            </a>
            <div className="flex items-center mt-2 text-black">
              <MapPin className="w-4 h-4 mr-1" />
              <div>San Francisco, CA</div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">About the Company</h2>
          <p>
          Unity is a popular cross-platform game engine that allows developers to create 2D and 3D games for mobile, PC, and console platforms. Founded in 2004, it&#39;s known for its accessibility to both indie developers and major studios, with applications extending beyond gaming into fields like architecture and film.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-white">Why I Want to Work Here</h2>

        <div className="grid gap-6 grid-cols-1 xl:grid-cols-3 mb-8">
          <div className="bg-[#333333] p-6 rounded-lg border border-[#444]">
            <div className="flex items-center mb-3">
              <Users className="w-5 h-5 mr-2 text-[#4e9eff]" />
              <h3 className="text-xl font-semibold text-white">Culture</h3>
            </div>
            <p>
              Unity is committed to fostering an inclusive, innovative environment and celebrates employees across all backgrounds. Their diverse culture enables collaboration and creativity across industries.
            </p>
          </div>

          <div className="bg-[#333333] p-6 rounded-lg border border-[#444]">
            <div className="flex items-center mb-3">
              <Briefcase className="w-5 h-5 mr-2 text-[#4e9eff]" />
              <h3 className="text-xl font-semibold text-white">Benefits</h3>
            </div>
            <p>
              Competitive salary of $158,530–$168,530 USD, hybrid schedule, and the opportunity to work on cutting-edge simulation and AI technologies with a world-class team.
            </p>
          </div>

          <div className="bg-[#333333] p-6 rounded-lg border border-[#444]">
            <div className="flex items-center mb-3">
              <MapPin className="w-5 h-5 mr-2 text-[#4e9eff]" />
              <h3 className="text-xl font-semibold text-white">Location</h3>
            </div>
            <p>
              Hybrid schedule with telecommuting permitted. Work remotely within the U.S. or from Unity offices depending on location and team needs.
            </p>
          </div>
        </div>

        {/* Skills They're Looking For */}
        <div className="p-6 mb-8 bg-[#2a2a2a] rounded-lg border border-[#444]">
          <h2 className="text-2xl font-bold mb-6 text-white">Skills They&#39;re Looking For</h2>
          <div className="flex flex-wrap gap-3">
            <div className="bg-[#4e9eff] text-black px-4 py-2 rounded-lg text-base font-medium flex items-center">
              <Award className="w-4 h-4 mr-2" />
              Time-series storage (Druid or Imply)
            </div>
            <div className="bg-[#4e9eff] text-black px-4 py-2 rounded-lg text-base font-medium flex items-center">
              <Award className="w-4 h-4 mr-2" />
              BigQuery or Snowflake
            </div>
            <div className="bg-[#4e9eff] text-black px-4 py-2 rounded-lg text-base font-medium flex items-center">
              <Award className="w-4 h-4 mr-2" />
              Kafka, Spark or Flink
            </div>
            <div className="bg-[#4e9eff] text-black px-4 py-2 rounded-lg text-base font-medium flex items-center">
              <Award className="w-4 h-4 mr-2" />
              Modern data tools (Airbyte, DBT, etc.)
            </div>
            <div className="bg-[#4e9eff] text-black px-4 py-2 rounded-lg text-base font-medium flex items-center">
              <Award className="w-4 h-4 mr-2" />
              End-to-end data pipelines
            </div>
          </div>
        </div>

        {/* My Skills */}
        <div className="p-6 bg-[#2a2a2a] rounded-lg border border-[#444]">
          <h2 className="text-2xl font-bold mb-6 text-white">My Skills</h2>
          <div className="flex flex-wrap gap-3">
            <div className="bg-[#4e9eff] text-black px-4 py-2 rounded-lg text-base font-medium flex items-center">
              <Award className="w-4 h-4 mr-2" />
              Version Control
            </div>
            <div className="bg-[#4e9eff] text-black px-4 py-2 rounded-lg text-base font-medium flex items-center">
              <Award className="w-4 h-4 mr-2" />
              Microsoft Azure
            </div>
            <div className="bg-[#4e9eff] text-black px-4 py-2 rounded-lg text-base font-medium flex items-center">
              <Award className="w-4 h-4 mr-2" />
              Team Collaboration
            </div>
            <div className="bg-[#4e9eff] text-black px-4 py-2 rounded-lg text-base font-medium flex items-center">
              <Award className="w-4 h-4 mr-2" />
              Javascript
            </div>
            <div className="bg-[#4e9eff] text-black px-4 py-2 rounded-lg text-base font-medium flex items-center">
              <Award className="w-4 h-4 mr-2" />
                C#
            </div>
            <div className="bg-[#4e9eff] text-black px-4 py-2 rounded-lg text-base font-medium flex items-center">
              <Award className="w-4 h-4 mr-2" />
                SQL
            </div>
            <div className="bg-[#4e9eff] text-black px-4 py-2 rounded-lg text-base font-medium flex items-center">
              <Award className="w-4 h-4 mr-2" />
                Next.js
            </div>
            <div className="bg-[#4e9eff] text-black px-4 py-2 rounded-lg text-base font-medium flex items-center">
              <Award className="w-4 h-4 mr-2" />
                React
            </div>
            <div className="bg-[#4e9eff] text-black px-4 py-2 rounded-lg text-base font-medium flex items-center">
              <Award className="w-4 h-4 mr-2" />
                Tailwind
            </div>
            <div className="bg-[#4e9eff] text-black px-4 py-2 rounded-lg text-base font-medium flex items-center">
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