import { ArrowLeft, TrendingUp, DollarSign, CreditCard, PieChart, Target, Brain, Database, Server, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function FinReliefCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Portfolio</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['Financial AI', 'Risk Assessment', 'Machine Learning'].map((tag) => (
              <span key={tag} className="bg-blue-50 text-blue-600 text-sm px-3 py-1 rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            FinRelief AI – Intelligent Financial Decision Platform
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-gray-600 leading-relaxed">
            AI-powered financial risk analysis and loan optimization system.
          </p>
        </div>
      </header>

      {/* Problem Statement */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>Problem</h2>
          <div className="bg-white rounded-xl shadow-md p-6">
            <p className="text-gray-600 leading-relaxed">
              Many individuals struggle with managing loans and financial planning due to lack of personalized insights. Without proper analysis of their financial health, people often take on loan commitments that they cannot sustain, leading to debt traps and financial stress.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Financial institutions and individual users need intelligent tools to evaluate financial health before taking loans. Traditional methods of assessment are manual, time-consuming, and don't provide personalized recommendations based on an individual's complete financial picture.
            </p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>Solution</h2>
          <div className="bg-white rounded-xl shadow-md border border-blue-100 p-6">
            <p className="text-gray-600 leading-relaxed">
              FinRelief AI analyzes financial data such as income, expenses, loan amount, and credit score to estimate financial risk and recommend optimized financial strategies.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              The platform uses machine learning algorithms to classify financial risk levels and provides personalized recommendations to help individuals make smarter financial decisions before committing to loans.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: 'Syne, sans-serif' }}>Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: TrendingUp, title: 'Loan Risk Assessment', desc: 'Evaluate loan eligibility and risk before commitment' },
              { icon: DollarSign, title: 'Financial Health Evaluation', desc: 'Comprehensive analysis of income vs expenses' },
              { icon: PieChart, title: 'Income vs Expense Analysis', desc: 'Visual breakdown of financial flow' },
              { icon: Target, title: 'Personalized Recommendations', desc: 'Tailored financial advice based on user data' },
              { icon: Shield, title: 'Risk Level Classification', desc: 'ML-powered risk categorization' },
              { icon: Brain, title: 'Credit Score Analysis', desc: 'Insight into credit score factors' },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <feature.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: 'Syne, sans-serif' }}>Tech Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Backend */}
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-500">
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">Backend</h3>
              <ul className="space-y-2">
                {['Python', 'FastAPI', 'PostgreSQL'].map((tech) => (
                  <li key={tech} className="text-gray-600 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {/* Frontend */}
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-green-500">
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">Frontend</h3>
              <ul className="space-y-2">
                {['React', 'Tailwind CSS', 'JavaScript'].map((tech) => (
                  <li key={tech} className="text-gray-600 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {/* Machine Learning */}
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-purple-500">
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">Machine Learning</h3>
              <ul className="space-y-2">
                {['Scikit-learn', 'Pandas', 'NumPy'].map((tech) => (
                  <li key={tech} className="text-gray-600 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: 'Syne, sans-serif' }}>System Architecture</h2>
          
          {/* Architecture Flow */}
          <div className="flex flex-col items-center gap-4">
            {[
              { step: 'User Input', icon: DollarSign, color: 'bg-blue-500' },
              { step: 'Financial Data Processing', icon: Server, color: 'bg-green-500' },
              { step: 'ML Risk Classification', icon: Brain, color: 'bg-purple-500' },
              { step: 'Recommendation Engine', icon: Target, color: 'bg-yellow-500' },
              { step: 'Risk Assessment Result', icon: Shield, color: 'bg-red-500' },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2">
                <div className={`${item.color} text-white px-6 py-3 rounded-lg shadow-md flex items-center gap-3 min-w-[280px] justify-center`}>
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.step}</span>
                </div>
                {idx < 4 && (
                  <div className="w-0.5 h-6 bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How The System Works */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: 'Syne, sans-serif' }}>How the System Works</h2>
          <div className="space-y-4">
            {[
              'User enters financial details including income, expenses, loan amount, and credit score',
              'Backend API receives and validates the financial data',
              'Machine learning model processes the data using risk classification algorithms',
              'System calculates risk level based on savings ratio and credit score thresholds',
              'Personalized recommendations are generated based on the risk assessment',
              'Results are displayed to user with actionable financial advice'
            ].map((step, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white rounded-lg p-4 shadow-sm border border-slate-100">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {idx + 1}
                </div>
                <p className="text-gray-700 leading-relaxed pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Classification Logic */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: 'Syne, sans-serif' }}>Risk Classification Logic</h2>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg border border-red-100">
                <Shield className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-red-700">High Risk</h3>
                  <p className="text-sm text-red-600 mt-1">
                    If savings {'<'} ₹5,000 OR credit score {'<'} 650
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                <Shield className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-yellow-700">Medium Risk</h3>
                  <p className="text-sm text-yellow-600 mt-1">
                    If savings between ₹5,000 - ₹15,000
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border border-green-100">
                <Shield className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-green-700">Low Risk</h3>
                  <p className="text-sm text-green-600 mt-1">
                    If savings {'>'} ₹15,000 AND credit score {'>'} 700
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Preview */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: 'Syne, sans-serif' }}>Interactive Demo</h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Try out the live demo to experience the financial risk analysis. Simply enter your income, expenses, loan amount, and credit score to get instant risk assessment.
          </p>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-600 font-medium">Input Fields</p>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    <li>• Monthly Income (₹)</li>
                    <li>• Monthly Expenses (₹)</li>
                    <li>• Loan Amount (₹)</li>
                    <li>• Credit Score (600-800)</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-600 font-medium">Output Results</p>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    <li>• Risk Level (High/Medium/Low)</li>
                    <li>• Monthly Savings Calculation</li>
                    <li>• Personalized Recommendations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>Impact</h2>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
            <p className="text-gray-700 leading-relaxed">
              FinRelief AI helps individuals make smarter financial decisions and avoid high-risk loan commitments. By providing personalized risk assessments and recommendations, the platform empowers users to understand their financial health before taking on debt.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Financial institutions can also leverage this technology to better assess loan applications and provide appropriate guidance to potential borrowers, ultimately reducing default rates and promoting financial wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Project Links */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: 'Syne, sans-serif' }}>Project Links</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/Akash2126/finrelief-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span className="font-mono">{ }</span>
              View Code
            </a>
          </div>
          <p className="text-center text-gray-500 mt-6">
            Live Demo: Click "Live Demo" button on the project card → Enter your financial details → Get instant risk assessment
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} FinRelief AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

