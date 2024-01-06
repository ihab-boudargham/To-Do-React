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
    search: '',
    setSearch: (searchTerm) => set(() => ({ search: searchTerm })),
    setSelectedNote: (note) => set(() => ({ selectedNote: note })),
    toggleAddNote: () => set((state) => ({ showAddNote: !state.showAddNote })),
        handleInputChange: (event) => set((state) => {
      const { name, value } = event.target;
      if (name === 'search') {
        return { search: value };
      }
    
      return {
        newNote: {
          ...state.newNote,
          [name]: value,
        },
        selectedNote: state.selectedNote
          ? { ...state.selectedNote, [name]: value }
          : state.selectedNote,
      };
    }),
    handleSaveNote: () => set((state) => {
      const { newNote } = state;
    
      // Check if all required fields are filled
      if (!newNote.title || !newNote.content || !newNote.priority || !newNote.dueDate) {
        alert("Please fill in all fields before saving the note.");
        return state; // Return the current state without saving the note
      }
    
      // Continue with saving the note if all fields are filled
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
          priority: '',
          dueDate: '',
          done: false,
          search: newNote.search,
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
        selectedNote: null,
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

          // Function to sort notes by due date in ascending order
        sortNotesByDueDate: () => set((state) => ({
          notes: [...state.notes.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))],
        })),
}));