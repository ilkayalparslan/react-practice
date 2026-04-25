import { create } from 'zustand';

const useStore = create((set) => ({
  currentStep: 1,

  form: {
    name: '',
    email: '',
    phone: '',
    position: '',
    hotelName: '',
    city: '',
    roomTypeCount: '',
    eachRoomTypeCount: '',
  },

  nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
  prevStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),

  updateForm: (field, value) =>
    set((state) => ({
      form: { ...state.form, [field]: value },
    })),
}));

export default useStore;
