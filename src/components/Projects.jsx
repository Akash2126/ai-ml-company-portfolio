import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Stethoscope, Package, Activity, TrendingUp } from 'lucide-react'
import { projects, getButtonConfig } from '../data/projects'
import DemoModal from './DemoModal'

const ProjectLinks = ({ project }) => {
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  
  const openDemo = () => setIsDemoOpen(true)
  const closeDemo = () => setIsDemoOpen(false)
  
  // Handle new project structure with individual properties
  if (project.github || project.liveDemo || project.doc || project.caseStudy) {
    return (
      <>
        <div className="flex flex-wrap gap-3 pt-4">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 text-sm font-medium btn-glow"
            >
              View Code
            </a>
          )}
          
          {project.liveDemo && (
            <button 
              onClick={openDemo}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 text-sm font-medium btn-glow"
            >
              Live Demo
            </button>
          )}
          
          {project.doc && (
            <a 
              href={project.doc} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 text-sm font-medium btn-glow"
            >
              Project Doc
            </a>
          )}
          
          {project.caseStudy && (
            <Link 
              to={project.caseStudy}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 text-sm font-medium btn-glow"
            >
              Case Study
            </Link>
          )}
        </div>
        
        <DemoModal 
          isOpen={isDemoOpen} 
          onClose={closeDemo} 
          modalType={project.liveDemo}
          projectTitle={project.title} 
        />
      </>
    )
  }
  
  // Handle legacy structure with buttons and links arrays
  const buttonConfig = getButtonConfig()
  const { links, buttons } = project
  
  const renderLink = (btnKey, link) => {
    const btn = buttonConfig[btnKey]
    const isComing = btnKey === 'coming'
    
    if (isComing) {
      return (
        <span key={btnKey} className="bg-gray-300 text-gray-500 px-4 py-2 rounded-lg text-sm font-medium cursor-not-allowed">
          {btn.label}
        </span>
      )
    }
    
    const isInternal = link && link.startsWith('/')
    const isExternal = link && link.startsWith('http')
    const isPlainText = link && !isInternal && !isExternal
    
    if (isPlainText) {
      return (
        <button
          key={btnKey}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm font-medium"
          title={link}
        >
          {btn.label}
        </button>
      )
    }
    
    if (isInternal) {
      return (
        <Link
          key={btnKey}
          to={link}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm font-medium"
        >
          {btn.label}
        </Link>
      )
    }
    
    if (isExternal) {
      return (
        <a
          key={btnKey}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm font-medium"
        >
          {btn.label}
        </a>
      )
    }
    
    return null
  }
  
  return (
    <div className="flex flex-wrap gap-3">
      {buttons && buttons.map((btnKey) => renderLink(btnKey, links?.[btnKey]))}
    </div>
  )
}

const AdditionalInfo = ({ info }) => {
  if (!info) return null
  
  return (
    <div className="bg-gray-50 border rounded-lg p-3 text-xs text-gray-600 mt-3">
      <div className="flex flex-wrap gap-x-4 gap-y-1">
        {Object.entries(info).map(([key, value]) => (
          <div key={key}>
            <span className="font-medium">{key}:</span> {value}
          </div>
        ))}
      </div>
    </div>
  )
}

const StatusBadge = ({ status }) => {
  const isCompleted = status === 'Completed'
  
  return (
    <span className={`rounded-full px-3 py-1 text-xs ${
      isCompleted 
        ? 'bg-green-100 text-green-700' 
        : 'bg-yellow-100 text-yellow-700'
    }`}>
      {status}
    </span>
  )
}

const ProjectIcon = ({ project }) => {
  // Domain-specific icon mapping
  const getIconConfig = (title) => {
    const titleLower = title.toLowerCase()
    
    if (titleLower.includes('careopt')) {
      return {
        Icon: Stethoscope,
        bgClass: 'bg-blue-50',
        textClass: 'text-blue-600'
      }
    }
    
    if (titleLower.includes('product return') || titleLower.includes('return')) {
      return {
        Icon: Package,
        bgClass: 'bg-purple-50',
        textClass: 'text-purple-600'
      }
    }
    
    if (titleLower.includes('anomaly') || titleLower.includes('healthcare')) {
      return {
        Icon: Activity,
        bgClass: 'bg-red-50',
        textClass: 'text-red-600'
      }
    }
    
    if (titleLower.includes('finrelief') || titleLower.includes('finance') || titleLower.includes('financial')) {
      return {
        Icon: TrendingUp,
        bgClass: 'bg-green-50',
        textClass: 'text-green-600'
      }
    }
    
    // Default fallback
    return {
      Icon: Stethoscope,
      bgClass: 'bg-blue-50',
      textClass: 'text-blue-600'
    }
  }
  
  const { Icon, bgClass, textClass } = getIconConfig(project.title)
  
  return (
    <div className={`p-3 rounded-xl ${bgClass} shadow-sm`}>
      <Icon size={22} className={textClass} />
    </div>
  )
}

const DomainTag = ({ tag }) => {
  return (
    <span className="bg-purple-50 text-purple-600 text-xs px-2 py-1 rounded-md font-medium mt-2 inline-block">
      {tag}
    </span>
  )
}

export default function Projects() {
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
    <section id="projects" className="py-20 md:py-24 bg-slate-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest font-mono">Work</span>
          </div>
          <h2 className="section-heading mb-3">Featured Projects</h2>
          <p className="section-subheading max-w-xl mx-auto">
            AI and ML projects tackling real-world problems across healthcare, e-commerce, and finance.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="reveal bg-white rounded-xl shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-1 p-6 hover-scale"
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              {/* Project Icon and Status */}
              <div className="flex items-center justify-between">
                <ProjectIcon project={project} />
                <StatusBadge status={project.status} />
              </div>

              {/* Domain Tag */}
              <DomainTag tag={project.domain || project.tag} />

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mt-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mt-2 max-w-prose">
                {project.description}
              </p>

              {/* Additional Info Block */}
              <AdditionalInfo info={project.additionalInfo} />

              {/* Tech Stack Tags */}
              <div className="flex-wrap flex gap-2 mt-4">
                {(project.tech || project.tags).map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-50 text-blue-600 rounded-md px-2 py-1 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t mt-4 pt-4" />

              {/* Buttons */}
              <ProjectLinks project={project} />
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="text-center mt-8">
          <button className="border border-blue-500 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-50 transition duration-300">
            View All on GitHub
          </button>
        </div>
      </div>
    </section>
  )
}

