import { ArrowLeft, Package, BarChart3, Users, DollarSign, TrendingUp, Cpu, Database, FlaskConical } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ProductReturnCaseStudy() {
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
            {['E-commerce AI', 'Machine Learning', 'Predictive Analytics'].map((tag) => (
              <span key={tag} className="bg-blue-50 text-blue-600 text-sm px-3 py-1 rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            Product Return Probability Predictor
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-gray-600 leading-relaxed">
            Machine learning model predicting e-commerce product return risk.
          </p>
        </div>
      </header>

      {/* Problem Statement */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>Problem</h2>
          <div className="bg-white rounded-xl shadow-md p-6">
            <p className="text-gray-600 leading-relaxed">
              Product returns represent a significant financial burden for e-commerce businesses. Every return involves shipping costs, processing fees, and inventory restocking expenses. Additionally, returned items often cannot be resold at full price, leading to margin losses.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              E-commerce companies need predictive systems to identify high-risk orders before shipping, enabling proactive measures such as:
            </p>
            <ul className="mt-4 space-y-2">
              {[
                'Enhanced quality checks for high-risk products',
                'Dynamic shipping strategies',
                'Customer communication optimization',
                'Inventory pre-positioning'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>Solution</h2>
          <div className="bg-white rounded-xl shadow-md border border-blue-100 p-6">
            <p className="text-gray-600 leading-relaxed">
              This project implements a machine learning-based return prediction system that analyzes historical order data to predict the likelihood of product returns.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              The system processes multiple features including product attributes, customer behavior patterns, and order characteristics to generate return probability scores. These predictions help e-commerce businesses make informed decisions about shipping, packaging, and customer outreach.
            </p>
          </div>
        </div>
      </section>

      {/* Machine Learning Model */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: 'Syne, sans-serif' }}>Machine Learning Model</h2>
          
          {/* Model Overview */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="w-8 h-8 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900">Classification Model</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              A classification model trained using historical order data to predict whether a product is likely to be returned. The model uses feature engineering and ensemble methods to achieve accurate predictions.
            </p>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Features</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: Package, title: 'Product Category', desc: 'Category and sub-category of the product' },
                { icon: DollarSign, title: 'Product Price', desc: 'Price point and price range classification' },
                { icon: Users, title: 'Customer Behavior', desc: 'Historical return patterns and purchase history' },
                { icon: TrendingUp, title: 'Order Features', desc: 'Order size, shipping method, and delivery timeframe' },
              ].map((feature, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow">
                  <feature.icon className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Model Metrics</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { label: 'Accuracy', value: '87%', desc: 'Overall prediction accuracy' },
                { label: 'Precision', value: '85%', desc: 'True positive rate for returns' },
                { label: 'Recall', value: '82%', desc: 'Identified actual return cases' },
              ].map((metric, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-md p-5 text-center">
                  <BarChart3 className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-500 mb-1">{metric.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{metric.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: 'Syne, sans-serif' }}>Tech Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Data Processing */}
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-500">
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">Data Processing</h3>
              <ul className="space-y-2">
                {['Python', 'Pandas', 'NumPy'].map((tech) => (
                  <li key={tech} className="text-gray-600 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {/* Machine Learning */}
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-purple-500">
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">Machine Learning</h3>
              <ul className="space-y-2">
                {['Scikit-learn', 'Random Forest', 'Feature Engineering'].map((tech) => (
                  <li key={tech} className="text-gray-600 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {/* Deployment */}
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-green-500">
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">Deployment</h3>
              <ul className="space-y-2">
                {['Flask', 'Streamlit', 'REST API'].map((tech) => (
                  <li key={tech} className="text-gray-600 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-orange-500">
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">Tools</h3>
              <ul className="space-y-2">
                {['Jupyter Notebook', 'Git', 'GitHub'].map((tech) => (
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

      {/* How To Run */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: 'Syne, sans-serif' }}>How To Run</h2>
          <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
            <div className="space-y-3">
              <p className="text-gray-300">
                <span className="text-green-400 font-mono">#</span> Clone the repository:
              </p>
              <code className="block bg-gray-800 text-blue-300 px-4 py-2 rounded-lg text-sm">
                git clone https://github.com/Akash2126/product-return-probability-predictor
              </code>
              
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-gray-300">
                  <span className="text-green-400 font-mono">#</span> Navigate to project directory:
                </p>
                <code className="block bg-gray-800 text-blue-300 px-4 py-2 rounded-lg text-sm mt-2">
                  cd product-return-probability-predictor
                </code>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-gray-300">
                  <span className="text-green-400 font-mono">#</span> Install dependencies:
                </p>
                <code className="block bg-gray-800 text-blue-300 px-4 py-2 rounded-lg text-sm mt-2">
                  pip install -r requirements.txt
                </code>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-gray-300">
                  <span className="text-green-400 font-mono">#</span> Run the model training:
                </p>
                <code className="block bg-gray-800 text-blue-300 px-4 py-2 rounded-lg text-sm mt-2">
                  python train_model.py
                </code>
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
              This predictive system helps e-commerce businesses reduce operational losses by identifying high-risk returns before they occur.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              By implementing ML-based return prediction, companies can optimize their logistics, improve customer satisfaction through proactive communication, and significantly reduce the financial burden associated with product returns.
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
              href="https://github.com/Akash2126/product-return-probability-predictor"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span className="font-mono">{ }</span>
              View Code
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Product Return Probability Predictor. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

