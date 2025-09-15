import InvestLogo from '/invest.svg'
import Header from './components/Header'
import InvestmentForm from './components/InvestmentForm'
function App() {
  return (
    <>
      <Header 
        image={InvestLogo} 
        title="Investment Calculator" 
        alt="Investment logo" 
      />
      <InvestmentForm />

    </>
  )
}

export default App
