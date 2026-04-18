import { create } from 'zustand';

export const useAppStore = create((set) => ({
  user: null,
  styleDNA: 'Minimal + Casual + Cool tones',
  mood: 'confident',
  occasion: 'interview',
  setUser: (user) => set({ user }),
  setStyleDNA: (styleDNA) => set({ styleDNA }),
}));
