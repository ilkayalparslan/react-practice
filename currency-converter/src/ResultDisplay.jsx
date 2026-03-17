import useStore from './store'

function ResultDisplay() {
  const result = useStore((state) => state.result)
  const loading = useStore((state) => state.loading)
  const error = useStore((state) => state.error)
  const amount = useStore((state) => state.amount)
  const fromCurrency = useStore((state) => state.fromCurrency)
  const toCurrency = useStore((state) => state.toCurrency)

  if (loading) return <p className='result-text loading'>Converting...!</p>
  if (error) return <p className='result-text error'>{error}</p>
  if (result === null)
    return (
      <p className='result-text placeholder'>Enter Amount and Click Convert</p>
    )
  return (
    <div className='result-box'>
      <p className='result-from'>
        {amount} {fromCurrency}
      </p>
      <p className='result-to'>
        {result} {toCurrency}
      </p>
    </div>
  )
}
export default ResultDisplay
