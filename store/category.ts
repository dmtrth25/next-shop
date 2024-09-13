import { create } from 'zustand'

interface ICategoryProps {
  activeId: number
  setActiveId: (activeId: number) => void
}

export const useCategoryStore = create<ICategoryProps>()(set => ({
  activeId: 1,
  setActiveId: (activeId: number) => set({ activeId }),
}))
