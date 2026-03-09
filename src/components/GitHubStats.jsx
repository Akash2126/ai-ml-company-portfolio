import { useEffect, useRef } from 'react'

// Replace with the actual GitHub username
const GITHUB_USERNAME = 'your-github-username'

export default function GitHubStats() {
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

  const statsBase = `https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}`
  const langsBase = `https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}`
  const streakBase = `https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}`

  const commonParams = `&theme=default&bg_color=ffffff&title_color=2563eb&text_color=1e293b&icon_color=2563eb&border_color=e2e8f0&border_radius=12&hide_border=false`

  return (
    <section id="github" className="py-24 bg-slate-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest font-mono">GitHub</span>
          </div>
          <h2 className="section-heading mb-3">Open Source Contributions</h2>
          <p className="section-subheading max-w-xl mx-auto">
            Real-time GitHub statistics showcasing contribution activity, commit streaks, and
            technology utilization across repositories.
          </p>
          {/* GitHub profile link */}
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 bg-slate-900 text-white rounded-xl font-medium text-sm hover:bg-slate-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            @{GITHUB_USERNAME}
          </a>
        </div>

        {/* Stats grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* General stats */}
          <div className="reveal bg-white rounded-2xl border border-slate-100 shadow-sm p-4 flex items-center justify-center min-h-[160px]">
            <img
              src={`${statsBase}&show_icons=true&count_private=true&hide=contribs${commonParams}`}
              alt="GitHub Stats"
              className="w-full rounded-xl"
              loading="lazy"
            />
          </div>

          {/* Top languages */}
          <div className="reveal bg-white rounded-2xl border border-slate-100 shadow-sm p-4 flex items-center justify-center min-h-[160px]">
            <img
              src={`${langsBase}&layout=compact&langs_count=8${commonParams}`}
              alt="Top Languages"
              className="w-full rounded-xl"
              loading="lazy"
            />
          </div>

          {/* Streak stats — full width */}
          <div className="reveal md:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-4 flex items-center justify-center">
            <img
              src={`${streakBase}&theme=default&background=ffffff&border=e2e8f0&stroke=e2e8f0&ring=2563eb&fire=2563eb&currStreakNum=1e293b&sideNums=1e293b&currStreakLabel=2563eb&sideLabels=64748b&dates=94a3b8&border_radius=12`}
              alt="GitHub Streak"
              className="w-full max-w-2xl rounded-xl"
              loading="lazy"
            />
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-xs text-slate-400 mt-6 reveal">
          ⚠️ Replace <code className="font-mono bg-slate-100 px-1 rounded">your-github-username</code> in{' '}
          <code className="font-mono bg-slate-100 px-1 rounded">GitHubStats.jsx</code> with the actual GitHub username.
        </p>
      </div>
    </section>
  )
}
