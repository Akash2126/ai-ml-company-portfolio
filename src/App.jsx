import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import SkillsExpertise from './components/SkillsExpertise'
import Mentoring from './components/Mentoring'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Footer from './components/Footer'
import HealthcareAnomalyCaseStudy from './pages/HealthcareAnomalyCaseStudy'
import ProductReturnCaseStudy from './pages/ProductReturnCaseStudy'
import FinReliefCaseStudy from './pages/FinReliefCaseStudy'

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <SkillsExpertise />
        <Mentoring />
        <Projects />
        <Certifications />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/case-study/careopt-ai" element={<HealthcareAnomalyCaseStudy />} />
      <Route path="/case-study/healthcare-anomaly-detection" element={<HealthcareAnomalyCaseStudy />} />
      <Route path="/case-study/product-return-predictor" element={<ProductReturnCaseStudy />} />
      <Route path="/case-study/finrelief-ai" element={<FinReliefCaseStudy />} />
    </Routes>
  )
}
