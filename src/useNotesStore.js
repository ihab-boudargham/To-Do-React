import {create} from 'zustand';

export const useNotesStore = create((set) => ({
  notes: [],
  showAddNote: false,
  newNote: {
    id: '',
    title: '',
    content: '',
    priority: '',
    dueDate: '',
    done: false,
  },
  selectedNote: null,
  setSelectedNote: (note) => set(() => ({ selectedNote: note })),
  toggleAddNote: () => set((state) => ({ showAddNote: !state.showAddNote })),
}))