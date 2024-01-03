import './App.css';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import { useNotesStore } from './useNotesStore';


function App() {

  const {
    toggleAddNote
  } = useNotesStore();


  return (
    <div className="app-container h-screen w-screen flex flex-col items-center gap-[1vw]">
          <Header />
          <SearchBar toggleAddNote={toggleAddNote}/>
    </div>
  );
}

export default App;
