import React from 'react';
import TodoItem from './TodoItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown, faClock } from '@fortawesome/free-solid-svg-icons';
import { isAfter, addDays, isBefore } from 'date-fns';
import { useNotesStore } from '../useNotesStore';

function TodoList({
  handleCheckboxChange,
  handleDeleteNote,
  toggleAddNote,
  setSelectedNote,
}) {
  const { notes, search, sortNotesByPriorityAsc, sortNotesByPriorityDesc, sortNotesByDueDate } = useNotesStore();

  // Filter out notes that are done
  const todoNotes = notes.filter((note) => !note.done);

  // Filter todoNotes based on search term
  const filteredTodoNotes = todoNotes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

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
        <button onClick={sortNotesByDueDate}>
          <FontAwesomeIcon icon={faClock} />
        </button>
      </div>

      {filteredTodoNotes.map((note, index) => (
        <TodoItem
          key={index}
          note={note}
          handleCheckboxChange={handleCheckboxChange}
          handleDeleteNote={handleDeleteNote}
          toggleAddNote={toggleAddNote}
          setSelectedNote={setSelectedNote}
          flash={isDueSoon(note.dueDate)}
        />
      ))}
    </div>
  );

  // Function to check if a note is due in the next 24 hours
  function isDueSoon(dueDate) {
    return isAfter(new Date(dueDate), new Date()) && isBefore(new Date(dueDate), addDays(new Date(), 1));
  }
}

export default TodoList;