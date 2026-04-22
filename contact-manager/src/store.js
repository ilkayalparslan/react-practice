import { jsx } from 'react/jsx-runtime';
import { create } from 'zustand';

// 1. ÖNCE KONTROL EDİYORUZ: Uygulama açıldığında localStorage'a bak.
const getInitialContacts = () => {
  const savedContacts = localStorage.getItem('contacts');

  if (savedContacts) {
    // Eğer içeride veri varsa, o veriyi al (string'den diziye çevir)
    return JSON.parse(savedContacts);
  } else {
    // Hiç veri yoksa (ilk defa giriliyorsa), boş dizi ver
    return [];
  }
};

const useStore = create((set) => ({
  // 2. BAŞLANGIÇ DEĞERİ: Artık boş [] değil, yukarıdaki kontrolden gelen sonuç.
  contacts: getInitialContacts(),

  addContact: (newContactData) =>
    set((state) => {
      const contactWithId = {
        id: Date.now(),
        ...newContactData,
      };

      // 3. EKLEME İŞLEMİ: state.contacts artık localStorage'dan gelen eski kişileri
      // de içinde barındırıyor. Böylece eski liste + yeni kişi yan yana gelmiş oluyor.
      const updatedContacts = [...state.contacts, contactWithId];

      // Yeni listeyi localStorage'a yazarak güncelliyoruz.
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));

      return { contacts: updatedContacts };
    }),

  deleteContact: (id) =>
    set((state) => {
      const updatedContacts = state.contacts.filter((c) => c.id !== id);
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));
      return { contacts: updatedContacts };
    }),

  updateContact: (id, updatedData) =>
    set((state) => {
      const updatedContacts = state.contacts.map((contact) =>
        contact.id === id ? { ...contact, ...updatedData } : contact,
      );
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));
      return { contacts: updatedContacts };
    }),
}));

export default useStore;
