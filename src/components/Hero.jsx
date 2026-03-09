import { useState, useEffect } from 'react'
import profileImg from '../assets/profile/profile.jpeg'

const skillChips = [
  'Python',
  'Machine Learning',
  'FastAPI',
  'Kafka',
  'SQL',
  'LLMs',
  'Generative AI',
]

const stats = [
  { label: 'AI Projects', value: '3+' },
  { label: 'Certifications', value: '6+' },
  { label: 'ML Internship', value: 'SmartBridge AI Team' },
]

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background with enhanced gradient */}
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/60 to-blue-100/30" />

      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-sky-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-16 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — Profile image with enhanced styling */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative animate-float">
              {/* Gradient glow behind */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 blur-xl opacity-40 scale-105" />
              
              {/* Card container */}
              <div className="relative bg-white p-3 rounded-xl shadow-lg">
                <img
                  src={profileImg}
                  alt="ML Engineer Profile"
                  className="w-64 h-64 sm:w-72 sm:h-72 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
                
                {/* Profile Identity Block */}
                <div className="mt-4 pb-2">
                  {/* Name */}
                  <h2 className="text-3xl font-bold text-gray-900 text-center mt-4">
                    Akash Tiwari
                  </h2>
                  
                  {/* Role */}
                  <p className="text-blue-600 font-semibold text-center mt-1">
                    Machine Learning Engineer Intern
                  </p>
                  
                  {/* Social Icons */}
                  <div className="flex justify-center gap-4 mt-4">
                    {/* GitHub Button */}
                    <a
                      href="https://github.com/Akash2126"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Profile"
                      className="w-11 h-11 rounded-full border bg-white shadow-sm flex items-center justify-center hover:bg-blue-50 hover:scale-105 transition duration-300"
                    >
                      <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    
                    {/* LinkedIn Button */}
                    <a
                      href="https://linkedin.com/in/akash2126"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profile"
                      className="w-11 h-11 rounded-full border bg-white shadow-sm flex items-center justify-center hover:bg-blue-50 hover:scale-105 transition duration-300"
                    >
                      <svg className="w-5 h-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div className={`order-1 lg:order-2 space-y-5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Role pill - light blue badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-sm font-semibold text-blue-700">AI/ML Engineering</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
              Building{' '}
              <span className="text-gradient">Production AI</span>
              <br className="hidden sm:block" />
              {' '}&{' '}
              <span className="text-gradient">ML Systems</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 font-medium">
              Designing scalable machine learning pipelines, real-time data systems, and generative AI applications for production environments.
            </p>

            {/* Description */}
            <p className="text-slate-500 text-base leading-relaxed max-w-lg">
              I work on building applied AI systems that transform data into intelligent applications. My work focuses on machine learning pipelines, RAG architectures, backend AI services, and real-time analytics platforms.
              <br /><br />
              Through hands-on projects and ML engineering workflows, I explore how scalable AI systems can solve real-world problems across healthcare, finance, and data-driven platforms.
            </p>

            {/* Skill chips with improved spacing */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              {skillChips.map((chip, index) => (
                <span 
                  key={chip} 
                  className="skill-tag"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-3">
              <button 
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium text-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 active:scale-95"
              >
                View Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button 
                onClick={() => scrollToSection('mentoring')}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-blue-200 text-blue-700 rounded-lg font-medium text-sm transition-all duration-200 hover:bg-blue-50 hover:border-blue-400 active:scale-95"
              >
                Explore Mentoring
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </button>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-3 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card flex items-center gap-2">
                  {index === 0 && (
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                  <div>
                    <span className="text-sm font-bold text-slate-800">{stat.value}</span>
                    <span className="text-xs text-slate-500 ml-1">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll cue */}
            <div className="pt-6 flex items-center gap-3">
              <div className="w-8 h-12 border-2 border-blue-300 rounded-full flex items-start justify-center pt-2">
                <div className="w-1.5 h-3 bg-blue-400 rounded-full animate-bounce" />
              </div>
              <span className="text-sm text-slate-400 font-medium">Scroll to explore</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

