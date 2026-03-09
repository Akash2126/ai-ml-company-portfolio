import companyLogo from '../assets/logos/smartbridge logo.png'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={companyLogo}
              alt="Company Logo"
              className="h-8 w-auto object-contain brightness-110 contrast-110"
            />
            <span className="text-sm text-slate-500 font-mono">|</span>
            <span className="text-sm font-medium text-slate-400">ML Intern Portfolio</span>
          </div>

          {/* Center — copyright */}
          <p className="text-sm text-slate-500 text-center">
            © {new Date().getFullYear()} Machine Learning Portfolio. All rights reserved.
          </p>

          {/* Right — tech stack badges */}
          <div className="flex items-center gap-2">
            <span className="bg-slate-800 text-slate-300 px-3 py-1 rounded-full text-xs">React</span>
            <span className="bg-slate-800 text-slate-300 px-3 py-1 rounded-full text-xs">Vite</span>
            <span className="bg-slate-800 text-slate-300 px-3 py-1 rounded-full text-xs">Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
