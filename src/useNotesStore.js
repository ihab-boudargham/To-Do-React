import {create} from 'zustand';
import { v4 as generateUniqueId } from 'uuid';

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
        : [...state.notes, { ...state.newNote, id: generateUniqueId() }];
  
    return {
        notes: updatedNotes,
        showAddNote: false,
        newNote: {
            id: '',
            title: '',
            content: '',
            priority: 1,
            dueDate: '',
            done: false,
        },
        selectedNote: null,
        };
    }),

    handleCheckboxChange: (id) => set((state) => {
        const updatedNotes = state.notes.map((note) => {
          if (note.id === id) {
            return { ...note, done: !note.done };
          }
          return note;
        });
      
        return {
          notes: updatedNotes,
        };
      }),
    
      handleDeleteNote: (id) => set((state) => {
        const updatedNotes = state.notes.filter((note) => note.id !== id);
        return {
          notes: updatedNotes,
          selectedNote: null,
        };
      }),
        // Function to sort notes by priority in ascending order
        sortNotesByPriorityAsc: () => set((state) => ({
            notes: [...state.notes.sort((a, b) => a.priority - b.priority)],
        })),

        // Function to sort notes by priority in descending order
        sortNotesByPriorityDesc: () => set((state) => ({
            notes: [...state.notes.sort((a, b) => b.priority - a.priority)],
        })),
}));