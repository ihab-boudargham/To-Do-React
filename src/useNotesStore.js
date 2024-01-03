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
    handleInputChange: (event) => set((state) => ({
      newNote: {
        ...state.newNote,
        [event.target.name]: event.target.value,
      },
      selectedNote: state.selectedNote
        ? { ...state.selectedNote, [event.target.name]: event.target.value }
        : state.selectedNote,
    })),
    handleSaveNote: () => set((state) => {
      const updatedNotes = state.selectedNote
        ? state.notes.map((note) => (note.id === state.selectedNote.id ? state.selectedNote : note))
        : [...state.notes, state.newNote];
  
      return {
        notes: updatedNotes,
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
      };
    }),
}));