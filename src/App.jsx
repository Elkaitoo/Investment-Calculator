import InvestLogo from '/invest.svg'
import Header from './components/Header'
function App() {
  return (
    <>
      <Header 
        image={InvestLogo} 
        title="Investment Calculator" 
        alt="Investment logo" 
      />
    </>
  )
}

export default App
