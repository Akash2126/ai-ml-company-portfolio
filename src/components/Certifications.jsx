import { useEffect, useRef } from 'react'
import { Box } from 'lucide-react'
import { SiGooglecloud } from 'react-icons/si'
import { certifications } from '../data/certifications'

import awsLogo from '../assets/certifications/aws.png'
import ibmLogo from '../assets/certifications/ibm.png'
import googleLogo from '../assets/certifications/google.png'
import linkedinLogo from '../assets/logos/LinkedIn.png'

export default function Certifications() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="certifications" className="py-20 md:py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest font-mono">Certifications</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Industry Certifications</h2>
          <p className="text-gray-500 max-w-xl mx-auto mt-2">
            Verified credentials from leading cloud and AI platforms, validating expertise across
            machine learning engineering and cloud infrastructure.
          </p>
        </div>

        {/* Cert cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {certifications.map((cert, idx) => (
            <div
              key={cert.id}
              className="reveal animate-fadeUp bg-white rounded-xl shadow-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ animationDelay: `${idx * 0.12}s` }}
            >
              {/* Top Gradient Accent Line */}
              <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-t-xl"></div>

              <div className="mt-6">
                {/* Icon Container + Verified badge */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center hover:-translate-y-1 transition duration-300">
                    {cert.logo ? (
                      <img
                        src={cert.logo}
                        alt={cert.issuer}
                        className="w-8 h-8 object-contain"
                      />
                    ) : (
                      <Box className="w-5 h-5 text-blue-600" />
                    )}
                  </div>
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Verified
                  </div>
                </div>

                {/* Info */}
                <h3 className="font-bold text-slate-900 text-base leading-snug mb-1 group-hover:text-blue-700 transition-colors">
                  {cert.title}
                </h3>
                
                {/* Issuer Badge */}
                <div className={`${cert.issuer === 'Microsoft Learn' ? 'bg-blue-100 text-blue-700' : 'bg-blue-50 text-blue-600'} px-2 py-1 rounded-md text-xs font-medium mt-2 inline-flex items-center gap-1`}>
                  {cert.issuer}
                </div>
                
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">{cert.description}</p>

                {/* View button - clean blue text style */}
                <a
                  href={cert.certificateLink || cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium text-sm mt-4 inline-block hover:text-blue-800 transition duration-200"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Google Cloud Skills Button */}
        <div className="flex flex-col items-center mt-12">
          <a
            href="https://www.skills.google/public_profiles/37d6579a-dd72-4138-a7b3-ff592ad971e3"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center gap-2 shadow-md"
          >
            <SiGooglecloud className="w-5 h-5" />
            View All Google Skill Badges
          </a>
          <p className="text-sm text-gray-500 mt-2">
            Explore all Google Cloud Skills Boost badges earned in Generative AI, Transformers, Prompt Engineering, and Image Generation.
          </p>
        </div>
      </div>
    </section>
  )
}

