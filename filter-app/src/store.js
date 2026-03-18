import { create } from 'zustand'

const useStore = create((set, get) => ({
  // fake data
  products: [
    {
      id: 1,
      name: 'MacBook Pro',
      category: 'Laptops',
      price: 1999,
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Dell XPS 15',
      category: 'Laptops',
      price: 1499,
      rating: 4.5,
    },
    { id: 3, name: 'iPhone 15', category: 'Phones', price: 999, rating: 4.7 },
    {
      id: 4,
      name: 'Samsung Galaxy S24',
      category: 'Phones',
      price: 849,
      rating: 4.4,
    },
    { id: 5, name: 'iPad Air', category: 'Tablets', price: 599, rating: 4.6 },
    {
      id: 6,
      name: 'Samsung Tab S9',
      category: 'Tablets',
      price: 449,
      rating: 4.3,
    },
    {
      id: 7,
      name: 'Sony WH-1000XM5',
      category: 'Audio',
      price: 349,
      rating: 4.9,
    },
    { id: 8, name: 'AirPods Pro', category: 'Audio', price: 249, rating: 4.7 },
    { id: 9, name: 'LG OLED C3', category: 'TVs', price: 1299, rating: 4.8 },
    { id: 10, name: 'Samsung QN90C', category: 'TVs', price: 999, rating: 4.5 },
    {
      id: 11,
      name: 'Asus ROG Strix',
      category: 'Laptops',
      price: 1799,
      rating: 4.6,
    },
    {
      id: 12,
      name: 'Google Pixel 8',
      category: 'Phones',
      price: 699,
      rating: 4.5,
    },
  ],

  // states
  searchQuery: '',
  selectedCategory: 'all',
  sortBy: 'name',

  // actions
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSortBy: (sortBy) => set({ sortBy }),

  // derived - tum filtreleri birlestir
  getFilteredProducts: () => {
    const { products, searchQuery, selectedCategory, sortBy } = get()

    let filtered = products

    // 1. category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === selectedCategory)
    }

    // 2.search filter
    if (searchQuery.trim() !== '') {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // 3.sort

    filtered = [...filtered].sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name)
      if (sortBy === 'price-low') return a.price - b.price
      if (sortBy === 'price-high') return b.price - a.price
      if (sortBy === 'rating') return b.rating - a.rating
      return 0
    })

    return filtered
  },

  // categories listesini data'dan cikar
  getCategories: () => {
    const { products } = get()
    const cats = [...new Set(products.map((p) => p.category))]
    return ['all', ...cats]
  },
}))

export default useStore
