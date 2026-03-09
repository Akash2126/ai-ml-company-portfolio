import { useState } from 'react'
import { X, Package, DollarSign, Star, Heart, Building2, Activity, Thermometer, Droplets, TrendingUp, TrendingDown, AlertCircle } from 'lucide-react'

// Healthcare Anomaly Detection Demo Modal
const HealthcareAnomalyDemo = ({ onClose }) => {
  const [patientId, setPatientId] = useState('')
  const [heartRate, setHeartRate] = useState('')
  const [bloodPressure, setBloodPressure] = useState('')
  const [temperature, setTemperature] = useState('')
  const [result, setResult] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const bloodPressureOptions = ['120/80', '130/90', '140/95', '160/110']

  const analyzeVitals = () => {
    if (!patientId || !heartRate || !bloodPressure || !temperature) {
      alert('Please fill in all fields')
      return
    }

    setIsAnalyzing(true)

    // Simulate processing delay
    setTimeout(() => {
      const hr = parseFloat(heartRate)
      const temp = parseFloat(temperature)
      const bp = bloodPressure

      // Anomaly detection logic
      const isHighHeartRate = hr > 110
      const isHighTemperature = temp > 38
      const isHighBP = bp === '160/110'

      const hasAnomaly = isHighHeartRate || isHighTemperature || isHighBP

      let riskLevel
      let anomalyDetails = []

      if (isHighHeartRate) {
        anomalyDetails.push(`Abnormal heart rate: ${hr} BPM`)
      }
      if (isHighTemperature) {
        anomalyDetails.push(`Elevated temperature: ${temp}°C`)
      }
      if (isHighBP) {
        anomalyDetails.push(`High blood pressure: ${bp}`)
      }

      if (hasAnomaly) {
        riskLevel = 'High Risk'
      } else {
        riskLevel = 'Normal'
      }

      setResult({
        patientId,
        heartRate: hr,
        bloodPressure: bp,
        temperature: temp,
        hasAnomaly,
        riskLevel,
        anomalyDetails
      })
      setIsAnalyzing(false)
    }, 800)
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-white text-lg font-bold">AI-Driven Healthcare Monitoring</h3>
            <p className="text-blue-100 text-sm">Real-time Anomaly Detection Simulation</p>
          </div>
          <button 
            onClick={onClose}
            className="text-white hover:text-blue-200 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Patient ID */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Activity className="w-4 h-4 inline-block mr-1" />
            Patient ID
          </label>
          <input
            type="text"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
            placeholder="e.g. P1023"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

        {/* Heart Rate */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Heart className="w-4 h-4 inline-block mr-1" />
            Heart Rate (BPM)
          </label>
          <input
            type="number"
            value={heartRate}
            onChange={(e) => setHeartRate(e.target.value)}
            placeholder="72"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

        {/* Blood Pressure */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Droplets className="w-4 h-4 inline-block mr-1" />
            Blood Pressure
          </label>
          <select
            value={bloodPressure}
            onChange={(e) => setBloodPressure(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          >
            <option value="">Select BP...</option>
            {bloodPressureOptions.map((bp) => (
              <option key={bp} value={bp}>{bp}</option>
            ))}
          </select>
        </div>

        {/* Temperature */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Thermometer className="w-4 h-4 inline-block mr-1" />
            Temperature (°C)
          </label>
          <input
            type="number"
            step="0.1"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            placeholder="36.5"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

        {/* Analyze Button */}
        <button
          onClick={analyzeVitals}
          disabled={isAnalyzing}
          className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed font-medium"
        >
          {isAnalyzing ? 'Analyzing Vitals...' : 'Analyze Vitals →'}
        </button>

        {/* Result */}
        {result && (
          <div className={`mt-6 p-4 rounded-xl border ${
            result.hasAnomaly 
              ? 'bg-red-50 border-red-200' 
              : 'bg-green-50 border-green-200'
          }`}>
            {result.hasAnomaly ? (
              // Anomaly Alert
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🚨</span>
                  <h4 className="text-sm font-semibold text-red-700">Critical Health Alert Detected</h4>
                </div>
                <p className="text-sm text-red-600 mb-3">Possible anomaly in patient vitals.</p>
                
                <div className="space-y-1 mb-3">
                  {result.anomalyDetails.map((detail, idx) => (
                    <p key={idx} className="text-xs text-red-600">• {detail}</p>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-red-700">Status: {result.riskLevel}</span>
                  <span className="text-xs bg-red-200 text-red-800 px-2 py-1 rounded-full">Action Required</span>
                </div>
              </div>
            ) : (
              // Normal Result
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">✅</span>
                  <h4 className="text-sm font-semibold text-green-700">Vitals Normal</h4>
                </div>
                <p className="text-sm text-green-600">No anomaly detected.</p>
                <p className="text-xs text-green-500 mt-1">Patient status stable.</p>
              </div>
            )}

            {/* ML Info Box */}
            <div className="mt-4 pt-3 border-t border-gray-200">
              <p className="text-xs font-semibold text-gray-600 mb-1">Model Used:</p>
              <p className="text-xs text-gray-500 mb-2">Autoencoder + Isolation Forest</p>
              <p className="text-xs font-semibold text-gray-600 mb-1">Pipeline:</p>
              <p className="text-xs text-gray-500">Kafka Streaming → ML Detection → PostgreSQL Alert</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// CareOpt AI Demo Modal
const CareOptDemo = ({ onClose }) => {
  const [treatmentType, setTreatmentType] = useState('')
  const [budget, setBudget] = useState('')
  const [city, setCity] = useState('')
  const [result, setResult] = useState(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const treatmentTypes = [
    'Heart Surgery',
    'Cancer Treatment',
    'Kidney Dialysis',
    'Orthopedic Surgery'
  ]

  const cities = ['Delhi', 'Mumbai', 'Bangalore', 'Hyderabad']

  const runPrediction = () => {
    if (!treatmentType || !budget || !city) {
      alert('Please fill in all fields')
      return
    }

    setIsCalculating(true)

    // Simulate processing delay
    setTimeout(() => {
      const budgetValue = parseFloat(budget)
      
      let hospital, cost
      if (budgetValue > 50000) {
        hospital = 'Apollo Hospital'
        cost = '₹48000'
      } else {
        hospital = 'Government Medical College'
        cost = '₹22000'
      }

      setResult({
        hospital,
        cost
      })
      setIsCalculating(false)
    }, 800)
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-white text-lg font-bold">CareOpt AI</h3>
            <p className="text-teal-100 text-sm">Hospital Recommendation</p>
          </div>
          <button 
            onClick={onClose}
            className="text-white hover:text-teal-200 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Treatment Type */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Heart className="w-4 h-4 inline-block mr-1" />
            Treatment Type
          </label>
          <select
            value={treatmentType}
            onChange={(e) => setTreatmentType(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
          >
            <option value="">Select treatment...</option>
            {treatmentTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Budget */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <DollarSign className="w-4 h-4 inline-block mr-1" />
            Budget (INR)
          </label>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            placeholder="e.g. 50000"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
          />
        </div>

        {/* City */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Building2 className="w-4 h-4 inline-block mr-1" />
            City
          </label>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
          >
            <option value="">Select city...</option>
            {cities.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Run Prediction Button */}
        <button
          onClick={runPrediction}
          disabled={isCalculating}
          className="w-full bg-teal-600 text-white py-3 rounded-xl hover:bg-teal-700 transition disabled:opacity-50 disabled:cursor-not-allowed font-medium"
        >
          {isCalculating ? 'Running Prediction...' : 'Run Prediction →'}
        </button>

        {/* Prediction Result */}
        {result && (
          <div className="mt-6 p-4 bg-gradient-to-br from-gray-50 to-teal-50 rounded-xl border border-teal-100">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Recommendation Result</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Recommended Hospital:</span>
                <span className="font-bold text-teal-600">{result.hospital}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Estimated Cost:</span>
                <span className="font-bold text-teal-600">{result.cost}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// Product Return Prediction Demo Modal
const ProductReturnDemo = ({ onClose }) => {
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [rating, setRating] = useState('')
  const [result, setResult] = useState(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const categories = ['Electronics', 'Fashion', 'Books', 'Home Appliances']
  const ratings = [1, 2, 3, 4, 5]

  const runPrediction = () => {
    if (!category || !price || !rating) {
      alert('Please fill in all fields')
      return
    }

    setIsCalculating(true)

    // Simulate processing delay
    setTimeout(() => {
      const priceValue = parseFloat(price)
      let returnProbability = priceValue > 200 ? 42 : 18

      let riskLevel
      if (returnProbability > 40) {
        riskLevel = 'High Risk'
      } else if (returnProbability > 20) {
        riskLevel = 'Medium Risk'
      } else {
        riskLevel = 'Low Risk'
      }

      setResult({
        probability: returnProbability,
        riskLevel
      })
      setIsCalculating(false)
    }, 800)
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-white text-lg font-bold">Product Return Predictor</h3>
            <p className="text-blue-100 text-sm">Interactive ML Demo</p>
          </div>
          <button 
            onClick={onClose}
            className="text-white hover:text-blue-200 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Product Category */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Package className="w-4 h-4 inline-block mr-1" />
            Product Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          >
            <option value="">Select category...</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <DollarSign className="w-4 h-4 inline-block mr-1" />
            Price (USD)
          </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="e.g. 99.99"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

        {/* Customer Rating */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Star className="w-4 h-4 inline-block mr-1" />
            Customer Rating
          </label>
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          >
            <option value="">Select rating...</option>
            {ratings.map((r) => (
              <option key={r} value={r}>{r} Star{r > 1 ? 's' : ''}</option>
            ))}
          </select>
        </div>

        {/* Run Prediction Button */}
        <button
          onClick={runPrediction}
          disabled={isCalculating}
          className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed font-medium"
        >
          {isCalculating ? 'Running Prediction...' : 'Run Prediction →'}
        </button>

        {/* Prediction Result */}
        {result && (
          <div className="mt-6 p-4 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border border-blue-100">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Prediction Result</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Return Probability:</span>
                <span className="font-bold text-blue-600">{result.probability}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Risk Level:</span>
                <span className={`font-bold px-2 py-1 rounded-full text-xs ${
                  result.riskLevel === 'Low Risk' ? 'bg-green-100 text-green-700' :
                  result.riskLevel === 'Medium Risk' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {result.riskLevel}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// FinRelief AI Demo Modal
const FinReliefDemo = ({ onClose }) => {
  const [monthlyIncome, setMonthlyIncome] = useState('')
  const [monthlyExpenses, setMonthlyExpenses] = useState('')
  const [loanAmount, setLoanAmount] = useState('')
  const [creditScore, setCreditScore] = useState('')
  const [result, setResult] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const creditScoreOptions = [600, 650, 700, 750, 800]

  const analyzeFinancialHealth = () => {
    if (!monthlyIncome || !monthlyExpenses || !loanAmount || !creditScore) {
      alert('Please fill in all fields')
      return
    }

    setIsAnalyzing(true)

    // Simulate processing delay
    setTimeout(() => {
      const income = parseFloat(monthlyIncome)
      const expenses = parseFloat(monthlyExpenses)
      const loan = parseFloat(loanAmount)
      const score = parseInt(creditScore)
      
      // Calculate savings
      const savings = income - expenses

      // Risk calculation logic
      let riskLevel
      let recommendation

      if (savings < 5000 || score < 650) {
        riskLevel = 'High'
        recommendation = 'Reduce expenses or increase savings before applying for large loans. Consider improving your credit score by paying existing debts on time.'
      } else if (savings >= 5000 && savings <= 15000) {
        riskLevel = 'Medium'
        recommendation = 'Your financial health is moderate. Try to increase your savings buffer before taking on additional loan obligations.'
      } else if (savings > 15000 && score > 700) {
        riskLevel = 'Low'
        recommendation = 'Your financial health looks good! You appear well-positioned to handle additional loan responsibilities.'
      } else {
        riskLevel = 'Medium'
        recommendation = 'Consider improving your credit score while maintaining good savings habits before applying for large loans.'
      }

      setResult({
        savings,
        loanAmount: loan,
        creditScore: score,
        riskLevel,
        recommendation
      })
      setIsAnalyzing(false)
    }, 800)
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-white text-lg font-bold">FinRelief AI – Financial Risk Analyzer</h3>
            <p className="text-blue-100 text-sm">AI-powered financial decision support demo</p>
          </div>
          <button 
            onClick={onClose}
            className="text-white hover:text-blue-200 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Monthly Income */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <DollarSign className="w-4 h-4 inline-block mr-1" />
            Monthly Income (₹)
          </label>
          <input
            type="number"
            value={monthlyIncome}
            onChange={(e) => setMonthlyIncome(e.target.value)}
            placeholder="e.g. 50000"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

        {/* Monthly Expenses */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <TrendingDown className="w-4 h-4 inline-block mr-1" />
            Monthly Expenses (₹)
          </label>
          <input
            type="number"
            value={monthlyExpenses}
            onChange={(e) => setMonthlyExpenses(e.target.value)}
            placeholder="e.g. 30000"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

        {/* Loan Amount */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Building2 className="w-4 h-4 inline-block mr-1" />
            Loan Amount (₹)
          </label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            placeholder="e.g. 200000"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

        {/* Credit Score */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Star className="w-4 h-4 inline-block mr-1" />
            Credit Score
          </label>
          <select
            value={creditScore}
            onChange={(e) => setCreditScore(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          >
            <option value="">Select credit score...</option>
            {creditScoreOptions.map((score) => (
              <option key={score} value={score}>{score}</option>
            ))}
          </select>
        </div>

        {/* Analyze Button */}
        <button
          onClick={analyzeFinancialHealth}
          disabled={isAnalyzing}
          className="bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition w-full disabled:opacity-50 disabled:cursor-not-allowed font-medium"
        >
          {isAnalyzing ? 'Analyzing Financial Health...' : 'Analyze Financial Health →'}
        </button>

        {/* Prediction Result */}
        {result && (
          <div className={`mt-6 p-4 rounded-xl border ${
            result.riskLevel === 'High' 
              ? 'bg-red-50 border-red-200' 
              : result.riskLevel === 'Medium'
              ? 'bg-yellow-50 border-yellow-200'
              : 'bg-green-50 border-green-200'
          }`}>
            <div className="flex items-center gap-2 mb-3">
              {result.riskLevel === 'High' && <AlertCircle className="w-5 h-5 text-red-600" />}
              {result.riskLevel === 'Medium' && <TrendingUp className="w-5 h-5 text-yellow-600" />}
              {result.riskLevel === 'Low' && <TrendingDown className="w-5 h-5 text-green-600" />}
              <h4 className={`text-sm font-semibold ${
                result.riskLevel === 'High' ? 'text-red-700' :
                result.riskLevel === 'Medium' ? 'text-yellow-700' :
                'text-green-700'
              }`}>
                Financial Risk Level: {result.riskLevel}
              </h4>
            </div>
            
            <div className="space-y-2 mb-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Monthly Savings:</span>
                <span className="font-bold text-gray-900">₹{result.savings.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Loan Amount:</span>
                <span className="font-bold text-gray-900">₹{result.loanAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Credit Score:</span>
                <span className="font-bold text-gray-900">{result.creditScore}</span>
              </div>
            </div>

            <div className={`p-3 rounded-lg ${
              result.riskLevel === 'High' 
                ? 'bg-red-100' 
                : result.riskLevel === 'Medium'
                ? 'bg-yellow-100'
                : 'bg-green-100'
            }`}>
              <p className={`text-xs font-semibold mb-1 ${
                result.riskLevel === 'High' ? 'text-red-700' :
                result.riskLevel === 'Medium' ? 'text-yellow-700' :
                'text-green-700'
              }`}>Recommendation:</p>
              <p className={`text-xs ${
                result.riskLevel === 'High' ? 'text-red-600' :
                result.riskLevel === 'Medium' ? 'text-yellow-600' :
                'text-green-600'
              }`}>{result.recommendation}</p>
            </div>

            {/* ML Info Box */}
            <div className="mt-4 pt-3 border-t border-gray-200">
              <p className="text-xs font-semibold text-gray-600 mb-1">Model:</p>
              <p className="text-xs text-gray-500 mb-2">Financial Risk Classification</p>
              <p className="text-xs font-semibold text-gray-600 mb-1">Features:</p>
              <p className="text-xs text-gray-500">Income, Expenses, Credit Score, Loan Amount</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// Main DemoModal Component
export default function DemoModal({ isOpen, onClose, modalType, projectTitle }) {
  if (!isOpen) return null

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      {modalType === 'healthcare-anomaly-demo' && (
        <HealthcareAnomalyDemo onClose={onClose} />
      )}
      
      {modalType === 'careopt-demo' && (
        <CareOptDemo onClose={onClose} />
      )}
      
      {modalType === 'product-return-demo' && (
        <ProductReturnDemo onClose={onClose} />
      )}

      {modalType === 'finrelief-demo' && (
        <FinReliefDemo onClose={onClose} />
      )}
    </div>
  )
}

