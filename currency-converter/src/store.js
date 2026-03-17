import { create } from 'zustand'

const useStore = create((set, get) => ({
  // states
  amount: 1,
  fromCurrency: 'EUR',
  toCurrency: 'TRY',
  result: null,
  loading: false,
  error: null,

  // actions
  setAmount: (amount) => set({ amount, result: null }),
  setFromCurrency: (currency) => set({ fromCurrency: currency, result: null }),
  setToCurrency: (currency) => set({ toCurrency: currency, result: null }),

  // swap currency
  swapCurrencies: async () => {
    set((state) => ({
      fromCurrency: state.toCurrency,
      toCurrency: state.fromCurrency,
    }))
    await get().convert()
  },

  // fetch api
  convert: async () => {
    const { amount, fromCurrency, toCurrency } = get()
    set({ loading: true, error: null })
    try {
      const res = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`,
      )
      if (!res.ok) throw new Error('Network response was not ok')
      const data = await res.json()
      const rate = data.rates[toCurrency]
      if (!rate) throw new Error(`Rate for ${toCurrency} not found`)
      set({ result: (amount * rate).toFixed(2), loading: false })
    } catch (err) {
      set({ error: 'Failed to fetch rates', loading: false })
    }
  },
}))

export default useStore
