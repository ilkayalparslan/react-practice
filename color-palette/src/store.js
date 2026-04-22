import { create } from "zustand";

const randomHex = () =>
  "#" +
  Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");

const useStore = create((set, get) => ({
  colors: [randomHex(), randomHex(), randomHex(), randomHex(), randomHex()],
  savedPalettes: [],

  generatePalette: () =>
    set({
      colors: [randomHex(), randomHex(), randomHex(), randomHex(), randomHex()],
    }),

  savePalette: () => {
    const { colors, savedPalettes } = get();
    set({
      savedPalettes: [...savedPalettes, { id: Date.now(), colors }],
    });
  },

  deletePalette: (id) => {
    const { savedPalettes } = get();
    set({
      savedPalettes: savedPalettes.filter((p) => p.id !== id),
    });
  },
}));

export default useStore;
