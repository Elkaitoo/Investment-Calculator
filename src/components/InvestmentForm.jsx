import { useState } from 'react'
import InputField from './InputField'
import './InvestmentForm.css'

function InvestmentForm() {
  const [formData, setFormData] = useState({
    initialInvestment: '',
    annualInvestment: '',
    expectedReturn: '',
    duration: ''
  })

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div className="investment-form">
      <div className="form-grid">
        <InputField
          id="initialInvestment"
          label="Initial Investment"
          value={formData.initialInvestment}
          onChange={(e) => handleInputChange('initialInvestment', e.target.value)}
          placeholder="Enter initial amount"
        />

        <InputField
          id="annualInvestment"
          label="Annual Investment"
          value={formData.annualInvestment}
          onChange={(e) => handleInputChange('annualInvestment', e.target.value)}
          placeholder="Enter annual amount"
        />

        <InputField
          id="expectedReturn"
          label="Expected Return (%)"
          value={formData.expectedReturn}
          onChange={(e) => handleInputChange('expectedReturn', e.target.value)}
          placeholder="Enter return rate"
          step="0.1"
        />

        <InputField
          id="duration"
          label="Duration (years)"
          value={formData.duration}
          onChange={(e) => handleInputChange('duration', e.target.value)}
          placeholder="Enter duration"
        />
      </div>
    </div>
  )
}

export default InvestmentForm
