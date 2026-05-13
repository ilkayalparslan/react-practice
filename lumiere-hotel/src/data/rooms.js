export const rooms = [
  {
    id: 'bosphorus-suite',
    slug: 'bosphorus-suite',
    name: 'Bosphorus Suite',
    category: 'Suite',
    shortDescription:
      'Panoramic Bosphorus views, a private terrace, and a freestanding marble bathtub.',
    longDescription:
      'Our flagship suite occupies the entire top floor. Floor-to-ceiling windows frame uninterrupted views of the Bosphorus, while the private terrace is perfect for morning coffee or evening cocktails. The bedroom features a king-size bed dressed in Egyptian cotton, and the marble bathroom is anchored by a freestanding tub.',
    size: 65, // m²
    maxGuests: 2,
    bedType: 'King',
    pricePerNight: 320, // EUR
    currency: 'EUR',
    featured: true, // Home'daki featured grid için
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200',
    ],
    amenities: [
      'Bosphorus view',
      'Private terrace',
      'Freestanding bathtub',
      'King bed',
      'Espresso machine',
      'Smart TV',
    ],
  },
  {
    id: 'cihangir-deluxe',
    slug: 'cihangir-deluxe',
    name: 'Cihangir Deluxe',
    category: 'Deluxe',
    shortDescription:
      'A bright corner room with neighborhood views and a generous sitting area.',
    longDescription:
      'Located on the third floor, the Cihangir Deluxe captures morning light through two exposures. The sitting area features a velvet armchair and a vintage writing desk, ideal for travelers who blend work and leisure.',
    size: 38,
    maxGuests: 2,
    bedType: 'Queen',
    pricePerNight: 180,
    currency: 'EUR',
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200',
    ],
    amenities: [
      'Neighborhood view',
      'Sitting area',
      'Queen bed',
      'Rain shower',
      'Espresso machine',
      'Smart TV',
    ],
  },
  {
    id: 'heritage-double',
    slug: 'heritage-double',
    name: 'Heritage Double',
    category: 'Classic',
    shortDescription:
      'An intimate room celebrating original Ottoman architectural details.',
    longDescription:
      "The Heritage Double preserves the building's original 1890s moldings and a restored fireplace (decorative). A queen bed and a marble bathroom complete this cozy retreat.",
    size: 28,
    maxGuests: 2,
    bedType: 'Queen',
    pricePerNight: 140,
    currency: 'EUR',
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200',
    ],
    amenities: [
      'Original moldings',
      'Decorative fireplace',
      'Queen bed',
      'Marble bathroom',
      'Smart TV',
    ],
  },
  {
    id: 'garden-studio',
    slug: 'garden-studio',
    name: 'Garden Studio',
    category: 'Studio',
    shortDescription:
      'A ground-floor studio opening onto our private courtyard garden.',
    longDescription:
      'The Garden Studio offers direct access to our private courtyard — a rare oasis in central Istanbul. A kitchenette and a separate seating area make it ideal for longer stays.',
    size: 42,
    maxGuests: 3,
    bedType: 'Queen + Sofa bed',
    pricePerNight: 200,
    currency: 'EUR',
    featured: false,
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200',
      'https://images.unsplash.com/photo-1551776235-dde6d482980b?w=1200',
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=1200',
    ],
    amenities: [
      'Garden access',
      'Kitchenette',
      'Queen bed + sofa bed',
      'Seating area',
      'Smart TV',
    ],
  },
  {
    id: 'rooftop-loft',
    slug: 'rooftop-loft',
    name: 'Rooftop Loft',
    category: 'Suite',
    shortDescription:
      'A duplex loft with skylights and a private rooftop nook.',
    longDescription:
      'The Rooftop Loft is our most unique accommodation — a two-story space where the upper level is a sun-drenched lounge under restored wooden beams and three skylights. A small private rooftop nook offers sunset views.',
    size: 55,
    maxGuests: 2,
    bedType: 'King',
    pricePerNight: 280,
    currency: 'EUR',
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200',
      'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=1200',
    ],
    amenities: [
      'Duplex layout',
      'Skylights',
      'Private rooftop nook',
      'King bed',
      'Espresso machine',
    ],
  },
  {
    id: 'petit-single',
    slug: 'petit-single',
    name: 'Petit Single',
    category: 'Classic',
    shortDescription: 'A compact, well-designed room for the solo traveler.',
    longDescription:
      'Small but thoughtfully designed, the Petit Single proves that great design beats square meters. A plush single bed, a writing nook, and a beautifully appointed bathroom.',
    size: 18,
    maxGuests: 1,
    bedType: 'Single',
    pricePerNight: 95,
    currency: 'EUR',
    featured: false,
    images: [
      'https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=1200',
      'https://images.unsplash.com/photo-1631049035634-c04c313ee6ac?w=1200',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200',
    ],
    amenities: ['Single bed', 'Writing nook', 'Rain shower', 'Smart TV'],
  },
];

// === Helper selectors ===
// Component'lerde tek tek filter yazmak yerine helper export ediyoruz.
// İleride API'ye geçince bu helper'lar olduğu gibi kalacak,
// sadece kaynak değişecek (array → fetch result).

export const getFeaturedRooms = () => rooms.filter((r) => r.featured);

export const getRoomBySlug = (slug) => rooms.find((r) => r.slug === slug);

export const getRoomsByCategory = (category) =>
  rooms.filter((r) => r.category === category);
