import { create } from 'zustand';

const images = [
  'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600',
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600',
  'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600',
  'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600',
  'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600',
  'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600',
];

const generatePosts = (page) => {
  return Array.from({ length: 6 }, (_, i) => ({
    id: (page - 1) * 6 + i + 1,
    title: `Post #${(page - 1) * 6 + i + 1}`,
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: images[i],
    author: ['Sarah', 'Marco', 'Yuki', 'Ahmed', 'Emma', 'Ilkay'][i],
    date: new Date(2026, 3, 30 - (page - 1) * 6 - i).toLocaleDateString(
      'en-US',
      {
        month: 'short',
        day: 'numeric',
      },
    ),
    likes: Math.floor(Math.random() * 200 + 10),
  }));
};

const useStore = create((set, get) => ({
  posts: [],
  page: 1,
  loading: false,
  hasMore: true, // daha yuklenecek post var mi

  // sayfa yukle - her cagrida 6 post ekle
  loadMore: () => {
    const { loading, hasMore, page, posts } = get();
    if (loading || !hasMore) return;
    set({ loading: true });

    // fake delay - gercek API gibi 800ms bekle
    setTimeout(() => {
      const newPosts = generatePosts(page);
      set({
        posts: [...posts, ...newPosts],
        page: page + 1,
        loading: false,
        // 5 sayfadan sonra dur (30 post)
        hasMore: page < 5,
      });
    }, 800);
  },
}));

export default useStore;
