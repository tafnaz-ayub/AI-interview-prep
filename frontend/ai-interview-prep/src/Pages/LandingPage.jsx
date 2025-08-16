import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LuSparkles } from 'react-icons/lu'
import hero_img from '../assets/hero_img.png'
import { APP_FEATURES } from '../utils/data'
import Modal from '../components/Modal'
import Login from './Auth/Login'
import SignUp from './Auth/SignUp'
const LandingPage = () => {
  const navigate = useNavigate()
  const [openAuthModel, setOpenAuthModel] = useState(false)
  const [currentPage, setCurrentPage] = useState("login")

  const handleCTA = () => {
    // Add your CTA navigation/logic here
  }

  return (
    <>
      <div className="relative w-full min-h-screen bg-[#0F172A] text-white">
        {/* Background Glow Effects */}
        <div className="w-[500px] h-[500px] bg-indigo-500/30 blur-[120px] absolute top-0 left-0"></div>
        <div className="w-[400px] h-[400px] bg-purple-500/20 blur-[100px] absolute bottom-0 right-0"></div>

        {/* Content */}
        <div className="container mx-auto px-4 pt-6 pb-[60px] relative z-10 flex flex-col items-center">
          {/* Header */}
          <header className="flex justify-between items-center w-full max-w-5xl mb-20">
            <div className="text-xl font-bold text-white">MindHire AI</div>
            <button
              className="bg-gradient-to-r from-indigo-500 to-violet-500 text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:opacity-90 border border-white/20 transition-colors"
              onClick={() => setOpenAuthModel(true)}
            >
              Login / Sign Up
            </button>
          </header>

          {/* Hero Section */}
          <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center md:justify-between gap-12 mb-14">
            {/* Left */}
            <div className="flex-1 min-w-[280px] md:max-w-[48%] flex flex-col items-start">
              <div className="flex items-center gap-2 text-[13px] text-cyan-300 font-semibold bg-cyan-900/40 px-3 py-1 rounded-full border border-cyan-400/50 mb-3">
                AI Powered
              </div>
              <h1 className="text-5xl font-semibold mb-7 leading-tight">
                Ace Interviews with <br />
                <span className="inline-flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-300 font-semibold">
                  AI-POWERED
                </span>{" "}
                LEARNING
              </h1>
            </div>

            {/* Right */}
            <div className="flex-1 min-w-[280px] md:max-w-[48%] flex flex-col items-start">
              <p className="text-[17px] text-gray-300 mb-8">
                Get role-specific questions, expand answers when you need them,
                dive deeper into concepts, and organize everything your way.
                From preparation to mastery — your ultimate interview toolkit is
                here.
              </p>
              <button
                className="bg-gradient-to-r from-cyan-400 to-blue-500 text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:opacity-90 border border-cyan-300/20 transition-colors"
                onClick={handleCTA}
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Hero Image Section */}
          <section className="flex items-center justify-center w-full">
            <div className="p-2 bg-gradient-to-r from-indigo-500/40 via-violet-500/30 to-cyan-400/20 rounded-2xl shadow-[0_0_30px_rgba(99,102,241,0.4)]">
              <img
                src={hero_img}
                alt="hero_image"
                className="w-[80vw] max-w-5xl rounded-xl border border-white/10 shadow-lg"
              />
            </div>
          </section>
          <div className='w-full min-h-full bg-[#0F172A] mt-10'>
  <div className='container mx-auto px-4 pt-10 pb-20'>
    <section className='mt-5'>
      <h2 className='text-2xl font-medium text-center mb-12 text-white'>
        Features that make
      </h2>
      <div className='flex flex-col items-center gap-8'>
        {/* First 3 cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full'>
          {APP_FEATURES.slice(0,3).map((feature) => (
            <div 
              key={feature.id} 
              className='bg-[#1E293B] p-6 rounded-xl shadow-md hover:shadow-xl shadow-indigo-900/40 transition border border-indigo-500/30'
            >
              <h3 className='text-base font-semibold mb-3 text-indigo-200'>
                {feature.title}
              </h3>
              <p className='text-gray-300'>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Remaining 2 cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {APP_FEATURES.slice(3).map((feature) => (
            <div 
              key={feature.id} 
              className='bg-[#1E293B] p-6 rounded-xl shadow-md hover:shadow-xl shadow-indigo-900/40 transition border border-indigo-500/30'
            >
              <h3 className='text-base font-semibold mb-3 text-indigo-200'>
                {feature.title}
              </h3>
              <p className='text-gray-300'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
</div>

<div className='text-sm bg-[#0F172A] text-gray-400 text-center p-5 mt-5'>
  Happy Coding
</div>
        </div>
      </div>
      <Modal
  isOpen={openAuthModel}
  onClose={() => {
    setOpenAuthModal(false);
    setCurrentPage("login");
  }}
  hideHeader
>
  <div>
    {currentPage === "login" && (
      <Login setCurrentPage={setCurrentPage} />
    )}
    {currentPage === "signup" && (
      <SignUp setCurrentPage={setCurrentPage} />
    )}
  </div>
</Modal>
    </>
  )
}

export default LandingPage