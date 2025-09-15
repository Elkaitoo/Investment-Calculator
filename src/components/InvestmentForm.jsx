import InputField from './InputField'
import './InvestmentForm.css'

function InvestmentForm({ formData, onInputChange }) {
  return (
    <div className="investment-form">
      <div className="form-grid">
        <InputField
          id="initialInvestment"
          label="Initial Investment"
          value={formData.initialInvestment}
          onChange={(e) => onInputChange('initialInvestment', e.target.value)}
          placeholder="Enter initial amount"
        />

        <InputField
          id="annualInvestment"
          label="Annual Investment"
          value={formData.annualInvestment}
          onChange={(e) => onInputChange('annualInvestment', e.target.value)}
          placeholder="Enter annual amount"
        />

        <InputField
          id="expectedReturn"
          label="Expected Return (%)"
          value={formData.expectedReturn}
          onChange={(e) => onInputChange('expectedReturn', e.target.value)}
          placeholder="Enter return rate"
          step="0.1"
        />

        <InputField
          id="duration"
          label="Duration (years)"
          value={formData.duration}
          onChange={(e) => onInputChange('duration', e.target.value)}
          placeholder="Enter duration"
        />
      </div>
    </div>
  )
}

export default InvestmentForm
