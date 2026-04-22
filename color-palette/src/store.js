import { create } from "zustand";

const randomHex = () =>
  "#" +
  Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");

notification: null;

const useStore = create((set, get) => ({
  colors: [randomHex(), randomHex(), randomHex(), randomHex(), randomHex()],
  savedPalettes: [],

  generatePalette: () =>
    set({
      colors: [randomHex(), randomHex(), randomHex(), randomHex(), randomHex()],
    }),

  savePalette: () => {
    const { colors, savedPalettes } = get();

    const alreadyExists = savedPalettes.some(
      (palette) => JSON.stringify(palette.colors) === JSON.stringify(colors),
    );

    if (alreadyExists) {
      set({ notification: "This palette already exists!" });
      setTimeout(() => set({ notification: null }), 4000);
      return;
    }

    set({
      savedPalettes: [...savedPalettes, { id: Date.now(), colors }],
      notification: "Palette saved!",
    });
    setTimeout(() => set({ notification: null }), 2000);
  },

  deletePalette: (id) => {
    const { savedPalettes } = get();
    set({
      savedPalettes: savedPalettes.filter((p) => p.id !== id),
    });
  },
}));

export default useStore;
