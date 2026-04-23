import { create } from 'zustand';

const useStore = create((set, get) => ({
  rooms: [
    {
      id: 1,
      name: 'Economy Room',
      description:
        'Clean and cozy room with all essentials for budget-conscious travelers.',
      price: 80,
      image:
        'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=600',
      features: ['Free WiFi', 'Air Conditioning', 'TV'],
      maxAdults: 1,
      maxChildren: 0,
    },
    {
      id: 2,
      name: 'Standard Room',
      description:
        'Comfortable room with a beautiful city view, perfect for couples.',
      price: 120,
      image:
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600',
      features: ['Free WiFi', 'City View', 'Air Conditioning', 'TV'],
      maxAdults: 2,
      maxChildren: 1,
    },
    {
      id: 3,
      name: 'Family Room',
      description:
        'Large room designed for families, with extra beds and kid-friendly amenities.',
      price: 180,
      image:
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600',
      features: ['Free WiFi', 'Garden View', 'Extra Beds', 'TV', 'Safe'],
      maxAdults: 3,
      maxChildren: 2,
    },
    {
      id: 4,
      name: 'Deluxe Suite',
      description:
        'Spacious suite with stunning sea view, king-size bed and luxury bathroom.',
      price: 220,
      image:
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600',
      features: ['Free WiFi', 'Sea View', 'King Bed', 'Minibar', 'Bathtub'],
      maxAdults: 2,
      maxChildren: 1,
    },
    {
      id: 5,
      name: 'Honeymoon Suite',
      description:
        'Romantic suite with private terrace, rose petal turndown and champagne.',
      price: 350,
      image:
        'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=600',
      features: ['Free WiFi', 'Sea View', 'Terrace', 'King Bed', 'Minibar'],
      maxAdults: 2,
      maxChildren: 0,
    },
    {
      id: 6,
      name: 'Presidential Suite',
      description:
        'Ultimate luxury with panoramic Bosphorus view and butler service.',
      price: 450,
      image:
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600',
      features: ['Free WiFi', 'Bosphorus View', 'Balcony', 'Butler', 'Jacuzzi'],
      maxAdults: 3,
      maxChildren: 2,
    },
  ],

  // Booking state — sayfalar arası paylaşılacak
  checkIn: '',
  checkOut: '',
  guests: 1,
  children: 0,
  selectedRoom: null,

  setCheckIn: (date) => set({ checkIn: date }),
  setCheckOut: (date) => set({ checkOut: date }),
  setGuests: (count) => set({ guests: Number(count) }),
  setChildren: (count) => set({ children: Number(count) }),
  setSelectedRoom: (room) => set({ selectedRoom: room }),

  getNights: () => {
    const { checkIn, checkOut } = get();
    if (!checkIn || !checkOut) return 0;
    const diffTime = new Date(checkOut) - new Date(checkIn);
    return Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
  },
}));

export default useStore;
