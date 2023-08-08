import { create } from "zustand";

const usePageBuilderStore = create((set) => ({
  components: [],
  addComponent: (text) => {
    set((state) => ({ components: [...state.components, { text }] }));
  },
  updateComponentText: (index, newText) => {
    set((state) => {
      const updatedComponents = [...state.components];
      updatedComponents[index] = { ...updatedComponents[index], text: newText };
      return { components: updatedComponents };
    });
  },
  removeComponent: (index) => {
    set((state) => ({
      components: state.components.filter((_, i) => i !== index),
    }));
  },
}));

export default usePageBuilderStore;
