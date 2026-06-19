export const hotelInfo = {
  // === Identity ===
  name: 'Lumière Boutique Hotel',
  tagline: 'Where light meets luxury in the heart of Istanbul',
  shortDescription:
    'A 12-room boutique sanctuary blending Ottoman heritage with contemporary design, steps from the Bosphorus.',

  // === Location ===
  address: {
    street: 'Cihangir Mahallesi, Sıraselviler Caddesi No: 42',
    district: 'Beyoğlu',
    city: 'Istanbul',
    country: 'Türkiye',
    postalCode: '34433',
  },
  coordinates: {
    lat: 41.0335,
    lng: 28.9836,
  },

  // === Contact ===
  contact: {
    phone: '+90 212 555 0142',
    whatsapp: '+90 532 555 0142',
    email: 'reservations@lumierehotel.com',
  },

  // === Social ===
  social: {
    instagram: 'https://instagram.com/lumierehotel',
    facebook: 'https://facebook.com/lumierehotel',
  },

  // === About page content ===
  about: {
    heading: 'Our Story',
    paragraphs: [
      'Lumière was born from a simple idea: a hotel should feel like the most refined version of home. Housed in a restored 1890s townhouse in Cihangir, each of our 12 rooms is individually designed.',
      'We blend the warmth of Ottoman craftsmanship with the clean lines of contemporary design. Our guests find themselves in a space that honors the past while embracing the present.',
    ],
    highlights: [
      {
        icon: 'location',
        title: 'Prime Location',
        text: 'Walking distance to Taksim, Istiklal, and the Bosphorus.',
      },
      {
        icon: 'rooms',
        title: '12 Unique Rooms',
        text: 'No two rooms alike — each tells its own story.',
      },
      {
        icon: 'service',
        title: '24/7 Concierge',
        text: 'Personalized service from arrival to departure.',
      },
    ],
  },

  gallery: [
    'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200',
    'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200',
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200',
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200',
    'https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=1200',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200',
    'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200',
    'https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?w=1200',
  ],

  // === Amenities (genel hotel-wide imkanlar) ===
  amenities: [
    'Complimentary breakfast',
    'High-speed Wi-Fi',
    'Concierge service',
    'Airport transfer (on request)',
    'Rooftop terrace',
    'In-room espresso machines',
  ],

  // === Check-in / check-out times ===
  policies: {
    checkInTime: '14:00',
    checkOutTime: '12:00',
    cancellationPolicy: 'Free cancellation up to 48 hours before check-in.',
  },
};
