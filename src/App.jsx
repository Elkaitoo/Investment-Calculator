import { useState, useMemo } from 'react'
import InvestLogo from '/invest.svg'
import Header from './components/Header'
import InvestmentForm from './components/InvestmentForm'
import ResultsTable from './components/ResultsTable'
import { calculateInvestmentResults } from './util/investment'

function App() {
  const [formData, setFormData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: +value // Convert to number
    }))
  }

  // Calculate results whenever form data changes
  const tableData = useMemo(() => {
    const { initialInvestment, annualInvestment, expectedReturn, duration } = formData

    // Only calculate if all required fields have values
    if (!initialInvestment || !annualInvestment || !expectedReturn || !duration) {
      return []
    }

    const results = calculateInvestmentResults({
      initialInvestment,
      annualInvestment, 
      expectedReturn,
      duration
    })

    // Transform results to match table structure
    let totalInterest = 0
    return results.map(yearData => {
      totalInterest += yearData.interest
      const investedCapital = initialInvestment + (yearData.year * annualInvestment)
      
      return {
        year: yearData.year,
        investmentValue: yearData.valueEndOfYear,
        interestYear: yearData.interest,
        totalInterest: totalInterest,
        investedCapital: investedCapital
      }
    })
  }, [formData])

  return (
    <>
      <Header 
        image={InvestLogo} 
        title="Investment Calculator" 
        alt="Investment logo" 
      />
      <InvestmentForm 
        formData={formData}
        onInputChange={handleInputChange}
      />
      <ResultsTable data={tableData} />
    </>
  )
}

export default App
