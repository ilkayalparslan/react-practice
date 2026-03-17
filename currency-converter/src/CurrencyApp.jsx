import CurrencyForm from './CurrencyForm'
import ResultDisplay from './ResultDisplay'

function CurrencyApp() {
  return (
    <div className='converter-container'>
      <h1 className='converter-title'>Currency Converter</h1>
      <CurrencyForm />
      <ResultDisplay />
    </div>
  )
}
export default CurrencyApp
