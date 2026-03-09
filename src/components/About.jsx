import { useEffect, useRef } from 'react'

const coreValues = [
  {
    icon: '🎯',
    title: 'Student-Centric Approach',
    desc: 'Students are at the center of everything we do. We focus on their growth, career readiness, and hands-on learning experiences.'
  },
  {
    icon: '⚖️',
    title: 'Equal Opportunities',
    desc: 'We strive to provide equal learning opportunities to students from both urban and remote regions.'
  },
  {
    icon: '🤝',
    title: 'Outcome-Driven Partnerships',
    desc: 'Our collaborations with institutions and companies focus on measurable outcomes and real-world impact.'
  },
  {
    icon: '💡',
    title: 'Innovation',
    desc: 'We constantly explore emerging technologies and modern learning models to improve education and industry readiness.'
  },
  {
    icon: '🌍',
    title: 'Social Impact',
    desc: 'Our programs aim to uplift communities and create opportunities through skill development.'
  }
]

const featureCards = [
  {
    icon: '🧠',
    title: 'AI System Design',
    desc: 'Designing production-grade AI systems solving real-world problems.'
  },
  {
    icon: '⚙️',
    title: 'ML Deployment',
    desc: 'Building end-to-end ML pipelines using Python, FastAPI, Kafka, and cloud infrastructure.'
  },
  {
    icon: '💬',
    title: 'Generative AI',
    desc: 'Working on RAG architectures, prompt engineering, and LLM applications.'
  },
  {
    icon: '👥',
    title: 'Mentoring Engineers',
    desc: 'Supporting developers and students through technical mentoring and knowledge sharing.'
  }
]

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100)
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
    <section id="about" className="py-20 md:py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12 reveal">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-200" />
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest font-mono px-4 py-1.5 bg-blue-50 rounded-full border border-blue-100">
            About
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-200" />
        </div>

        {/* Main Title */}
        <div className="text-center mb-16 reveal">
          <h2 className="section-heading mb-4">
            Transforming Education and<br />
            <span className="text-gradient">AI Systems at Scale</span>
          </h2>
          <p className="section-subheading max-w-3xl mx-auto">
            Building bridges between education, industry, and intelligent systems through 
            real-world AI applications and scalable learning programs.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* LEFT COLUMN */}
          <div className="space-y-8">
            {/* Introduction */}
            <div className="reveal">
              <p className="section-subheading leading-relaxed">
                At SmartBridge, we work at the intersection of education, industry, and emerging technologies. 
                Our mission is to prepare the workforce of tomorrow by integrating project-based learning, 
                industry collaboration, and real-world technical training.
              </p>
              <p className="section-subheading leading-relaxed mt-4">
                As part of the AI/ML team, I contribute to building applied machine learning solutions, 
                data-driven systems, and scalable AI workflows that address real-world problems across 
                healthcare, analytics, and intelligent automation.
              </p>
              <p className="section-subheading leading-relaxed mt-4">
                Our work spans the complete lifecycle of machine learning systems—from data engineering 
                and model development to API integration and scalable deployment.
              </p>
            </div>

            {/* Vision & Mission Cards */}
            <div className="grid sm:grid-cols-2 gap-4 reveal">
              <div className="p-5 rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white hover:-translate-y-1 hover:shadow-lg transition duration-300">
                <h3 className="font-semibold text-blue-800 text-lg mb-2">Our Vision</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Empowering the workforce of tomorrow by creating a sustainable talent ecosystem 
                  that connects academia, industry, and cutting-edge technologies.
                </p>
              </div>
              <div className="p-5 rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white hover:-translate-y-1 hover:shadow-lg transition duration-300">
                <h3 className="font-semibold text-blue-800 text-lg mb-2">Our Mission</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To build a strong industry-academia bridge through project-based learning, 
                  virtual internships, and skill development programs that equip students with 
                  the capabilities required in modern technology careers.
                </p>
              </div>
            </div>

            {/* Core Values Grid */}
            <div className="reveal">
              <h3 className="font-semibold text-slate-800 text-lg mb-4">Core Values</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {coreValues.map((value) => (
                  <div
                    key={value.title}
                    className="p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 hover:-translate-y-1 hover:shadow-md transition duration-300 group"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xl">{value.icon}</span>
                      <div>
                        <p className="font-semibold text-slate-800 text-sm group-hover:text-blue-700 transition-colors">
                          {value.title}
                        </p>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">{value.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Objective Section */}
            <div className="reveal">
              <div className="p-6 rounded-xl bg-blue-600 text-white">
                <h3 className="font-semibold text-lg mb-2">Our Objective</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  SmartBridge aims to bridge the gap between academic education and real-world 
                  industry requirements. Through targeted skill development programs and internships, 
                  we prepare students with practical knowledge and hands-on experience needed to 
                  succeed in modern technology roles.
                </p>
              </div>
            </div>

            {/* SmartBridge Platform Card */}
            <div className="reveal">
              <div className="p-6 rounded-xl border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition duration-300">
                <h3 className="font-semibold text-slate-800 text-lg mb-3">SmartBridge Skill Wallet Platform</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  SmartBridge's edtech platform, Skill Wallet, enables project-based collaborative 
                  learning integrated into university curricula. It empowers students to develop 
                  technical and professional skills required to become job-ready engineers.
                </p>
                <div className="flex items-center gap-2 text-blue-600 text-sm font-medium">
                  <span>🎯</span>
                  <span>Delivering 1M+ Virtual Internships across emerging technologies</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Feature Cards */}
          <div className="lg:sticky lg:top-24 h-fit">
            <h3 className="font-semibold text-slate-800 text-lg mb-6 reveal">Key Focus Areas</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {featureCards.map((card, index) => (
                <div
                  key={card.title}
                  className="p-5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 hover:-translate-y-1 hover:shadow-lg transition duration-300 group reveal"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                      {card.icon}
                    </span>
                    <div>
                      <p className="font-semibold text-slate-800 text-base group-hover:text-blue-700 transition-colors">
                        {card.title}
                      </p>
                      <p className="text-sm text-slate-500 mt-1 leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

