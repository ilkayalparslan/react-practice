import { create } from 'zustand';

const useStore = create((set, get) => ({
  // state

  // olusturula sifre basta bos generate basinca dolacak
  password: '',

  // sifre uzunlugu , slider bunu kontrol edecek
  length: 12,

  // hangi karakter turleri dahil? checkbozlar kontrol eder
  includeUppercase: true,
  includeLowercase: true,
  includeNumbers: true,
  includeSymbols: true,

  // son uretilen sifreler . recent passwords bolumunde gosterilecek
  history: [],

  //  --- actions ---

  // slider degisince cagrilacak uzunlugu gunceller
  setLength: (length) => set({ length }),

  // checkboxlar degisince cagrilacak ilgili secenegi toggle eder
  toggleUppercase: () =>
    set((state) => ({ includeUppercase: !state.includeUppercase })),
  toggleLowercase: () =>
    set((state) => ({ includeLowercase: !state.includeLowercase })),
  toggleNumbers: () =>
    set((state) => ({ includeNumbers: !state.includeNumbers })),
  toggleSymbols: () =>
    set((state) => ({ includeSymbols: !state.includeSymbols })),

  //  generat password butonunu basinca cagrilacak
  // 1 secili karakter setlerini birlestirir
  // 2 rastgele sifre uretir
  // 3 password state ini gunceller
  // 4 history e ekler (max 5 tane tutar)
  generatePassword: () => {
    const {
      length,
      includeUppercase,
      includeLowercase,
      includeNumbers,
      includeSymbols,
    } = get();

    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    // secili karakter setlerini birlestirir
    let chars = '';
    if (includeUppercase) chars += upper;
    if (includeLowercase) chars += lower;
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;

    // hicbiri secili degilse lowercase kullan (en az bir set olmali)
    if (chars === '') chars = lower;

    // rastgele sifre uret
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }

    // histor e ekle (max 5 , en yeni en once)
    const { history } = get();
    const newHistory = [password, ...history].slice(0, 5);

    set({ password, history: newHistory });
  },
}));

export default useStore;
