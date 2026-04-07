import { create } from 'zustand';

const hotels = [
  {
    id: 1,
    name: 'Arbor Hotel Istanbul',
    location: 'Üsküdar, Istanbul',
    price: 120,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600',
    tags: ['Boutique', 'Sea View', 'Breakfast'],
    featured: true,
  },
  {
    id: 2,
    name: 'Azure Resort Bodrum',
    location: 'Bodrum, Muğla',
    price: 250,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600',
    tags: ['Resort', 'Pool', 'Beach'],
    featured: true,
  },
  {
    id: 3,
    name: 'Cappadocia Cave Suites',
    location: 'Göreme, Nevşehir',
    price: 180,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=600',
    tags: ['Unique', 'Breakfast', 'View'],
    featured: false,
  },
  {
    id: 4,
    name: 'Pera Palace Hotel',
    location: 'Beyoğlu, Istanbul',
    price: 320,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600',
    tags: ['Luxury', 'Historic', 'Spa'],
    featured: false,
  },
  {
    id: 5,
    name: 'Alaçatı Boutique Stay',
    location: 'Alaçatı, Izmir',
    price: 150,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600',
    tags: ['Boutique', 'Breakfast', 'Garden'],
    featured: false,
  },
  {
    id: 6,
    name: 'Antalya Beach Hotel',
    location: 'Konyaaltı, Antalya',
    price: 200,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600',
    tags: ['Beach', 'Pool', 'All-Inclusive'],
    featured: true,
  },
];

const useStore = create((set, get) => ({
  hotels,
  searchQuery: '',
  selectedTag: 'All',
  sortBy: 'recommended',
  favorites: [],

  setSearchQuery: (query) => set({ searchQuery: query }),
  setSelectedTag: (tag) => set({ selectedTag: tag }),
  setSortBy: (sortBy) => set({ sortBy }),

  toggleFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.includes(id)
        ? state.favorites.filter((fId) => fId !== id)
        : [...state.favorites, id],
    })),
}));

export default useStore;
