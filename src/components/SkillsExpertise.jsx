import { useEffect, useRef, useState } from 'react'
import { Brain, Settings, BarChart3 } from 'lucide-react'
import { skillCategories } from '../data/skills'

// Icon mapping
const iconMap = {
  brain: Brain,
  settings: Settings,
  'bar-chart-3': BarChart3,
}

function SkillBar({ name, level, description, visible }) {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="mb-4 group">
      <div className="flex justify-between items-center mb-1.5">
        <span 
          className="text-sm font-medium text-slate-700 cursor-default relative"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {name}
          {/* Tooltip */}
          {showTooltip && description && (
            <span className="absolute bottom-full left-0 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded-md whitespace-nowrap z-10">
              {description}
            </span>
          )}
        </span>
        <span className="text-xs font-semibold text-blue-600 font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-1000 ease-out"
          style={{ width: visible ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

const categoryColors = {
  blue: { bg: 'bg-blue-600', light: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', gradient: 'from-blue-50 to-white' },
  indigo: { bg: 'bg-indigo-600', light: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-700', gradient: 'from-indigo-50 to-white' },
  sky: { bg: 'bg-sky-600', light: 'bg-sky-50', border: 'border-sky-200', text: 'text-sky-700', gradient: 'from-sky-50 to-white' },
}

export default function SkillsExpertise() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
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
    <section id="skills" className="py-20 md:py-24 bg-slate-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest font-mono">Skills & Expertise</span>
          </div>
          <h2 className="section-heading mb-6">Technical Proficiencies</h2>
          <p className="section-subheading max-w-xl mx-auto">
            Core competencies spanning machine learning engineering, backend systems, and data analytics.
          </p>
        </div>

        {/* Key Technical Areas highlight */}
        <p className="text-sm text-gray-500 tracking-wide uppercase mb-6 text-center">Key Technical Areas</p>

        {/* Skill category cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, catIdx) => {
            const colors = categoryColors[cat.color] || categoryColors.blue
            const IconComponent = iconMap[cat.icon] || Brain
            
            return (
              <div
                key={cat.id}
                className="reveal bg-white rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                style={{ transitionDelay: `${catIdx * 100}ms` }}
              >
                {/* Card header with gradient */}
                <div className={`bg-gradient-to-r ${colors.gradient} ${colors.border} border-b px-6 py-5`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-blue-600 transition-transform duration-300 hover:scale-105">
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 text-sm font-display">{cat.label}</h3>
                      <p className="text-xs text-slate-500">{cat.skills.length} skills</p>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="px-6 py-5">
                  {cat.skills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      description={skill.description}
                      visible={visible}
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom tech badge cloud - Also familiar with */}
        <div className="mt-12 text-center reveal">
          <p className="text-sm text-slate-400 font-medium mb-5 uppercase tracking-widest">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Docker', 'Git', 'Jupyter', 'Scikit-learn', 'PyTorch', 'HuggingFace', 'LangChain', 'Pandas', 'NumPy', 'Streamlit'].map((t) => (
              <span 
                key={t} 
                className="px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-sm font-medium hover:bg-blue-100 hover:scale-105 transition duration-200 cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

