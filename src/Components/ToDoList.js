import React from 'react';
import TodoItem from './TodoItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown, faClock } from '@fortawesome/free-solid-svg-icons';


function TodoList({
    notes,
    handleCheckboxChange,
    handleDeleteNote,
    toggleAddNote,
    setSelectedNote,
    sortNotesByPriorityAsc,
    sortNotesByPriorityDesc,
  }) {
    return (
      <div className="list-container overflow-y-auto h-[70vh]">
        <div className="list-head flex gap-[2vw] pl-[5vw] items-center">
          <h1 className='font-bold text-lg'>todo items</h1>
          <span>-</span>
          <button onClick={sortNotesByPriorityAsc}>
            <FontAwesomeIcon icon={faSortUp} style={{ color: 'red' }} />
          </button>
          <button onClick={sortNotesByPriorityDesc}>
            <FontAwesomeIcon icon={faSortDown} style={{ color: 'red' }} />
          </button>
          <button><FontAwesomeIcon icon={faClock} /></button>
        </div>
  
        {notes.map((note, index) => (
          <TodoItem
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
  
  export default TodoList;