import { create } from 'zustand';

const useStore = create((set, get) => ({
  // fake product data
  products: [
    { id: 1, name: 'Wireless Headphones', price: 59.99, image: '🎧' },
    { id: 2, name: 'Mechanical Keyboard', price: 89.99, image: '⌨️' },
    { id: 3, name: 'USB-C Hub', price: 34.99, image: '🔌' },
    { id: 4, name: 'Webcam HD', price: 49.99, image: '📷' },
    { id: 5, name: 'Mouse Pad XL', price: 19.99, image: '🖱️' },
    { id: 6, name: 'Monitor Light', price: 39.99, image: '💡' },
  ],

  // state
  cart: [],

  // actions
  addToCart: (productId) =>
    set((state) => {
      const existing = state.cart.find((item) => item.productId === productId);
      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.productId === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }
      return {
        cart: [...state.cart, { productId, quantity: 1 }],
      };
    }),

  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.productId !== productId),
    })),

  updateQuantity: (productId, quantity) =>
    set((state) => {
      if (quantity <= 0) {
        return {
          cart: state.cart.filter((item) => item.productId !== productId),
        };
      }
      return {
        cart: state.cart.map((item) =>
          item.productId === productId ? { ...item, quantity } : item,
        ),
      };
    }),

  clearCart: () => set({ cart: [] }),

  getCartTotal: () => {
    const { cart, products } = get();
    return cart
      .reduce((total, item) => {
        const product = products.find((p) => p.id === item.productId);
        return total + product.price * item.quantity;
      }, 0)
      .toFixed(2);
  },

  getCartCount: () => {
    return get().cart.reduce((count, item) => count + item.quantity, 0);
  },
}));

export default useStore;
