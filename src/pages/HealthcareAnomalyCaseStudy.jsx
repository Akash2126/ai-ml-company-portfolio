import { ArrowLeft, Activity, Database, Cpu, GitBranch, BarChart3, Mail, AlertTriangle, FlaskConical } from 'lucide-react'
import { Link } from 'react-router-dom'
import anomalyImg from '../assets/projects/anomaly.png'

export default function HealthcareAnomalyCaseStudy() {
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
            {['Healthcare Monitoring', 'Real-Time ML', 'Streaming Data Systems'].map((tag) => (
              <span key={tag} className="bg-blue-50 text-blue-600 text-sm px-3 py-1 rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            AI-Driven Healthcare Anomaly Detection System
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-gray-600 leading-relaxed">
            Real-time patient monitoring platform detecting abnormal vitals using machine learning and streaming data pipelines.
          </p>
        </div>
      </header>

      {/* Problem Statement */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>Problem</h2>
          <div className="bg-white rounded-xl shadow-md p-6">
            <p className="text-gray-600 leading-relaxed">
              Continuous monitoring of patient vitals is critical in healthcare environments. However, manual monitoring systems are slow and can miss sudden anomalies in patient health metrics.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Hospitals require automated systems capable of processing real-time patient data and detecting abnormal patterns quickly to enable early intervention.
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
              This project implements a real-time healthcare monitoring system using machine learning models and streaming data pipelines.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Patient vitals are continuously streamed through Apache Kafka and processed using anomaly detection models. The system identifies abnormal patterns and stores alerts in a PostgreSQL database while displaying monitoring insights in a real-time dashboard.
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
              { icon: Activity, title: 'Real-time patient vitals streaming', desc: 'Continuous data flow from simulated patient monitors' },
              { icon: GitBranch, title: 'Kafka-based data pipeline', desc: 'Robust message streaming infrastructure' },
              { icon: Cpu, title: 'Anomaly detection using Autoencoder', desc: 'Deep learning model for pattern recognition' },
              { icon: AlertTriangle, title: 'Isolation Forest anomaly detection', desc: 'ML algorithm for outlier identification' },
              { icon: Database, title: 'Patient-wise anomaly tracking', desc: 'Individual patient history and alerts' },
              { icon: Database, title: 'PostgreSQL alert logging', desc: 'Persistent storage for all detected anomalies' },
              { icon: Mail, title: 'Email alerts for critical conditions', desc: 'Automated notifications for healthcare staff' },
              { icon: BarChart3, title: 'Interactive Flask dashboard', desc: 'Real-time visualization and monitoring' },
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Backend */}
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-500">
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">Backend</h3>
              <ul className="space-y-2">
                {['Python', 'Flask', 'PostgreSQL'].map((tech) => (
                  <li key={tech} className="text-gray-600 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {/* Streaming */}
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-green-500">
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">Streaming</h3>
              <ul className="space-y-2">
                {['Apache Kafka', 'Zookeeper'].map((tech) => (
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
                {['Autoencoder', 'Isolation Forest'].map((tech) => (
                  <li key={tech} className="text-gray-600 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visualization & Version Control */}
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-orange-500">
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">Visualization & Tools</h3>
              <ul className="space-y-2">
                {['Chart.js', 'Git', 'GitHub'].map((tech) => (
                  <li key={tech} className="text-gray-600 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
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
              { step: 'Patient Data Stream', icon: Activity, color: 'bg-blue-500' },
              { step: 'Kafka Producer', icon: GitBranch, color: 'bg-green-500' },
              { step: 'Kafka Topic', icon: Database, color: 'bg-green-600' },
              { step: 'Consumer Processing', icon: Cpu, color: 'bg-yellow-500' },
              { step: 'ML Anomaly Detection', icon: FlaskConical, color: 'bg-purple-500' },
              { step: 'PostgreSQL Alert Storage', icon: Database, color: 'bg-blue-600' },
              { step: 'Flask Monitoring Dashboard', icon: BarChart3, color: 'bg-orange-500' },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2">
                <div className={`${item.color} text-white px-6 py-3 rounded-lg shadow-md flex items-center gap-3 min-w-[280px] justify-center`}>
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.step}</span>
                </div>
                {idx < 6 && (
                  <div className="w-0.5 h-6 bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Dashboard */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: 'Syne, sans-serif' }}>Application Dashboard</h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            The Flask-based monitoring dashboard provides real-time insights into patient vitals and anomaly detection results.
          </p>
          
          {/* Dashboard Screenshot Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Main Dashboard View */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200">
              <div className="bg-gray-900 px-4 py-2 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-xs text-gray-400">Flask Dashboard - Patient Monitoring</span>
              </div>
              <img 
                src={anomalyImg} 
                alt="Healthcare Anomaly Detection Dashboard" 
                className="w-full h-auto"
              />
            </div>

            {/* Dashboard Features */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Real-time Vitals Charts
                </h3>
                <p className="text-sm text-gray-600">
                  Live visualization of patient heart rate, blood pressure, temperature, and oxygen saturation with Chart.js
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  Anomaly Alerts
                </h3>
                <p className="text-sm text-gray-600">
                  Instant alerts when ML models detect abnormal patterns in patient vitals, enabling quick response
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Patient Monitoring Panel
                </h3>
                <p className="text-sm text-gray-600">
                  Track individual patients with detailed anomaly history and trend analysis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How The System Works */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: 'Syne, sans-serif' }}>How the System Works</h2>
          <div className="space-y-4">
            {[
              'Patient vitals are simulated and sent to Kafka Producer',
              'Kafka streams the data to a topic',
              'Consumer processes streaming vitals data',
              'ML models detect anomalies',
              'Alerts are stored in PostgreSQL',
              'Flask dashboard displays anomalies in real time'
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

      {/* Running The Project */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: 'Syne, sans-serif' }}>Running the Project</h2>
          <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
            <div className="space-y-3">
              <p className="text-gray-300">
                <span className="text-green-400 font-mono">#</span> Start all services:
              </p>
              <code className="block bg-gray-800 text-blue-300 px-4 py-2 rounded-lg text-sm">
                start_all.bat
              </code>
              
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-gray-300 mb-2">Or start individually:</p>
                <div className="grid md:grid-cols-2 gap-3">
                  <code className="block bg-gray-800 text-blue-300 px-4 py-2 rounded-lg text-sm">
                    start_kafka.bat
                  </code>
                  <code className="block bg-gray-800 text-blue-300 px-4 py-2 rounded-lg text-sm">
                    start_producer.bat
                  </code>
                  <code className="block bg-gray-800 text-blue-300 px-4 py-2 rounded-lg text-sm">
                    start_consumer.bat
                  </code>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-gray-300">
                  <span className="text-green-400 font-mono">#</span> Run dashboard:
                </p>
                <code className="block bg-gray-800 text-blue-300 px-4 py-2 rounded-lg text-sm mt-2">
                  cd app && python app.py
                </code>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-gray-300">
                  <span className="text-green-400 font-mono">#</span> Open dashboard:
                </p>
                <a 
                  href="http://127.0.0.1:5000/dashboard" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm mt-2 text-center hover:bg-blue-700 transition-colors"
                >
                  http://127.0.0.1:5000/dashboard
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>Impact</h2>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
            <p className="text-gray-700 leading-relaxed">
              This system demonstrates how real-time data pipelines and machine learning models can be used to build intelligent healthcare monitoring platforms.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Such systems can help hospitals detect abnormal patient conditions faster, enabling proactive healthcare interventions and potentially saving lives through early warning systems.
            </p>
          </div>
        </div>
      </section>

      {/* Project Links */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: 'Syne, sans-serif' }}>Project Links</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/Akash2126/AI-Driven-Healthcare-Anomaly-Detection-System"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span className="font-mono">{ }</span>
              View Code
            </a>
            <a
              href="https://drive.google.com/file/d/1-meLq8AvsrHulCzaONwCi7nFze4haBgB/view"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <span className="font-mono">📄</span>
              Project Documentation
            </a>
          </div>
          <p className="text-center text-gray-500 mt-6">
            Demo: Run locally using the commands above → Dashboard at http://127.0.0.1:5000/dashboard
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} AI-Driven Healthcare Anomaly Detection System. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

