import InvestLogo from '/invest.svg'
import Header from './components/Header'
import InvestmentForm from './components/InvestmentForm'
import ResultsTable from './components/ResultsTable'
function App() {
  return (
    <>
      <Header 
        image={InvestLogo} 
        title="Investment Calculator" 
        alt="Investment logo" 
      />
      <InvestmentForm />
      <ResultsTable />

    </>
  )
}

export default App
