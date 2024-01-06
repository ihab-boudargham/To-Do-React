import React from 'react';
import DoneItem from './DoneItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { useNotesStore } from '../useNotesStore';
function DoneList({
    notes,
    handleCheckboxChange,
    handleDeleteNote,
    toggleAddNote,
    setSelectedNote,
  }) {

    const { sortNotesByPriorityAsc, sortNotesByPriorityDesc, sortNotesByDueDate  } = useNotesStore();

    return (
      <div className="list-container overflow-y-auto h-[70vh]">
        <div className="list-head flex gap-[2vw] pl-[5vw] mb-4 items-center">
          <h1 className='font-bold text-lg'>done items</h1>
          <span>-</span>
            <button onClick={sortNotesByPriorityAsc}>
            <FontAwesomeIcon icon={faSortUp} style={{ color: 'red' }} />
            </button>
            <button onClick={sortNotesByPriorityDesc}>
            <FontAwesomeIcon icon={faSortDown} style={{ color: 'red' }} />
            </button >
            <button onClick={sortNotesByDueDate}>
            <FontAwesomeIcon icon={faClock} /></button>
        </div>

  
        {notes
        .filter((note) => note.done)
        .map((note, index) => (
          <DoneItem
            key={index}
            note={note}
            handleCheckboxChange={handleCheckboxChange}
            handleDeleteNote={handleDeleteNote}
            toggleAddNote={toggleAddNote}
            setSelectedNote={setSelectedNote}
          />
        ))}
    </div>
    );
  }
  
  export default DoneList;