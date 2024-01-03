import './App.css';
import AddNoteForm from './Components/AddNoteForm';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import { useNotesStore } from './useNotesStore';


function App() {

  const {
    notes,
    showAddNote,
    newNote,
    selectedNote,
    setSelectedNote,
    toggleAddNote,
    handleInputChange,
    handleSaveNote,
  } = useNotesStore();


  return (
    <div className="app-container h-screen w-screen flex flex-col items-center gap-[1vw]">
          <Header />
          <SearchBar toggleAddNote={toggleAddNote}/>
          <AddNoteForm
            showAddNote={showAddNote}
            newNote={newNote}
            selectedNote={selectedNote}
            toggleAddNote={toggleAddNote}
            handleInputChange={handleInputChange}
            handleSaveNote={handleSaveNote}
          />
    </div>
  );
}

export default App;
