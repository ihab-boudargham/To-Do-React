import './App.css';
import AddNoteForm from './Components/AddNoteForm';
import DoneList from './Components/DoneList';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import TodoList from './Components/ToDoList';
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
    handleCheckboxChange,
    handleDeleteNote,
    sortNotesByPriorityAsc,
    sortNotesByPriorityDesc,
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
          <hr className="hr my-[1vw]" />
          <div className="app flex gap-[3vw]">
            <TodoList               
              notes={notes}
              handleCheckboxChange={handleCheckboxChange}
              handleDeleteNote={handleDeleteNote}
              toggleAddNote={toggleAddNote}
              setSelectedNote={setSelectedNote}
              sortNotesByPriorityAsc={sortNotesByPriorityAsc}
              sortNotesByPriorityDesc={sortNotesByPriorityDesc}
            />
            <DoneList notes={notes} />
          </div>
    </div>
  );
}

export default App;
