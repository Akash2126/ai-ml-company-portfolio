import { useState, useEffect, useRef, useCallback } from 'react'
import m1 from '../assets/mentoring/Mentoring1.png.jpeg'
import m2 from '../assets/mentoring/mentoring-2.png.jpeg'
import m3 from '../assets/mentoring/mentoring3.png.jpeg'
import m4 from '../assets/mentoring/mentoring4.png.jpeg'

const slides = [
  {
    img: m1,
    title: 'Hands-On AI Workshops',
    desc: 'Facilitating interactive workshops on machine learning fundamentals, covering model training, evaluation, and deployment best practices for junior team members.',
  },
  {
    img: m2,
    title: 'Code Review & Pair Programming',
    desc: 'Conducting structured code reviews and pair programming sessions to reinforce clean coding standards, ML pipeline architecture, and efficient Python practices.',
  },
  {
    img: m3,
    title: 'Project Mentoring & Presentations',
    desc: 'Guiding interns and junior developers through end-to-end project delivery, from problem framing and data collection to model deployment and technical presentations.',
  },
  {
    img: m4,
    title: 'Technical Leadership',
    desc: 'Leading technical discussions and providing guidance on best practices for AI/ML implementation across various team projects.',
  },
]

export default function Mentoring() {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)
  const sectionRef = useRef(null)
  const intervalRef = useRef(null)

  const goTo = useCallback((idx) => {
    setFading(true)
    setTimeout(() => {
      setCurrent(idx)
      setFading(false)
    }, 350)
  }, [])

  const next = useCallback(() => {
    goTo((current + 1) % slides.length)
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length)
  }, [current, goTo])

  useEffect(() => {
    intervalRef.current = setInterval(next, 3000)
    return () => clearInterval(intervalRef.current)
  }, [next])

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
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const slide = slides[current]

  return (
    <section id="mentoring" className="py-20 md:py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest font-mono">Mentoring</span>
          </div>
          <h2 className="section-heading mb-3">Knowledge Transfer & Mentorship</h2>
          <p className="section-subheading max-w-xl mx-auto">
            Supporting engineering students through hands-on workshops, hackathons, and technical mentoring in AI, machine learning, and software development.
          </p>
        </div>

        {/* Slideshow */}
        <div className="reveal max-w-4xl mx-auto">
          <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
            {/* Image */}
            <div className="relative h-[420px]">
              <img
                src={slide.img}
                alt={slide.title}
                className={`w-full h-full object-cover rounded-2xl transition-opacity duration-350 ${fading ? 'opacity-0' : 'opacity-100'}`}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Slide counter */}
              <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                <span className="text-xs font-mono text-white/80">
                  {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                </span>
              </div>
            </div>

            {/* Content */}
            <div
              className={`p-6 sm:p-8 transition-opacity duration-350 ${fading ? 'opacity-0' : 'opacity-100'}`}
            >
              <h3 className="text-xl font-bold font-display text-white mb-2">{slide.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{slide.desc}</p>

              {/* Controls */}
              <div className="flex items-center justify-between mt-6">
                {/* Dots */}
                <div className="flex gap-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      className={`transition-all duration-300 rounded-full ${
                        i === current
                          ? 'w-6 h-2 bg-blue-400'
                          : 'w-2 h-2 bg-white/30 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>

                {/* Arrow buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-all duration-200 hover:border-white/30"
                    aria-label="Previous slide"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={next}
                    className="w-10 h-10 rounded-xl bg-blue-600 hover:bg-blue-500 border border-blue-500 flex items-center justify-center text-white transition-all duration-200"
                    aria-label="Next slide"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mentoring Description */}
        <div className="mt-10 reveal">
          <p className="text-slate-600 text-center max-w-2xl mx-auto leading-relaxed">
            Conducting hands-on mentoring sessions focused on Python development, machine learning workflows, and project-based problem solving. Supporting students through code reviews, debugging sessions, and real-world AI project guidance.
          </p>
        </div>

        {/* Optional Small Highlights */}
        <div className="flex flex-wrap justify-center gap-3 mt-6 reveal">
          {['Workshop Mentoring', 'Hackathon Support', 'AI Project Guidance', 'Python Development'].map((tag) => (
            <span
              key={tag}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Mentoring Impact Section */}
        <div className="mt-12 reveal">
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-center max-w-3xl mx-auto hover:-translate-y-1 transition duration-300">
            <h3 className="text-lg font-bold font-display text-slate-800 mb-3">Mentoring Impact</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Mentoring activities conducted at Galgotias University through technical workshops, hackathons, and collaborative learning sessions.
            </p>
            <div className="space-y-2">
              <p className="text-slate-700 text-sm">
                <span className="font-semibold text-blue-700">100+</span> students guided in machine learning concepts, Python development, and real-world AI applications
              </p>
              <p className="text-slate-700 text-sm">
                <span className="font-semibold text-blue-700">1000+</span> coding and project-related doubts solved during hackathons and technical workshops
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
