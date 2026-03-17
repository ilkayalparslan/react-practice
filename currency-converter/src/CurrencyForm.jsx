import useStore from './store'

const currencies = ['USD', 'EUR', 'TRY', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF']

function CurrencyForm() {
  const amount = useStore((state) => state.amount)
  const fromCurrency = useStore((state) => state.fromCurrency)
  const toCurrency = useStore((state) => state.toCurrency)
  const setAmount = useStore((state) => state.setAmount)
  const setFromCurrency = useStore((state) => state.setFromCurrency)
  const setToCurrency = useStore((state) => state.setToCurrency)
  const swapCurrencies = useStore((state) => state.swapCurrencies)
  const convert = useStore((state) => state.convert)

  const handleSubmit = (e) => {
    e.preventDefault()
    convert()
  }
  return (
    <form className='converter-form' onSubmit={handleSubmit}>
      <div className='input-group'>
        <label className='input-label'>Amount</label>
        <input
          type='number'
          className='amount-input'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min='0'
        />
      </div>

      <div className='currency-row'>
        <div className='input-group'>
          <label className='input-label'>From</label>
          <select
            className='currency-select'
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            {currencies.map((x) => (
              <option key={x} value={x}>
                {x}
              </option>
            ))}
          </select>
        </div>

        <button className='swap-btn' type='button' onClick={swapCurrencies}>
          ⇄
        </button>

        <div className='input-group'>
          <label className='input-label'>To</label>
          <select
            className='currency-select'
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            {currencies.map((x) => (
              <option key={x} value={x}>
                {x}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button className='convert-btn' type='submit'>
        Convert
      </button>
    </form>
  )
}
export default CurrencyForm
