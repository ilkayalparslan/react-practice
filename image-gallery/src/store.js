import { create } from 'zustand';

const useStore = create((set, get) => ({
  selectedCategory: 'All',
  selectedImageIndex: null,
  images: [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600',
      category: 'Rooms',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600',
      category: 'Restaurant',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600',
      category: 'Exterior',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600',
      category: 'Lobby',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600',
      category: 'Rooms',
    },
  ],

  setSelectedCategory: (category) => set({ selectedCategory: category }),
  openLightbox: (index) => set({ selectedImageIndex: index }),
  closeLightbox: () => set({ selectedImageIndex: null }),

  nextImage: () => {
    const { selectedImageIndex, images } = get();
    set({
      selectedImageIndex: (selectedImageIndex + 1) % images.length,
    });
  },

  prevImage: () => {
    const { selectedImageIndex, images } = get();
    set({
      selectedImageIndex:
        (selectedImageIndex - 1 + images.length) % images.length,
    });
  },
}));

export default useStore;
