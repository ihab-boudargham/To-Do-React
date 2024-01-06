import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { formatDistanceToNow } from 'date-fns';
import { isAfter, addDays, isBefore } from 'date-fns';

function TodoItem({
  note,
  handleCheckboxChange,
  handleDeleteNote,
  toggleAddNote,
  setSelectedNote,
}) {
  // Check if the note is due in the next 24 hours
  const isDueSoon = isAfter(new Date(note.dueDate), new Date()) && isBefore(new Date(note.dueDate), addDays(new Date(), 1));
  return (
    <div className='todo-items' key={note.id}>
      <div className= {`item rounded-xl p-2 ${isDueSoon ? 'flashy-animation' : ''}`}>
        <div className='item-header rounded-t-xl h-8 px-2'>
          <div className='flex items-center text-white text-sm gap-2'>
            <p className='priority'>
              ({note.priority})
            </p>
            <p className='item-title'>
              {note.title}
            </p>
          </div>

          <div className="flex items-center ml-auto gap-5 text-sm">
            <p className='day'>
              {formatDistanceToNow(new Date(note.dueDate), { addSuffix: true })}
            </p>

            <label className="checkbox-container pt-1">
              <input
                type="checkbox"
                className="hidden-checkbox"
                checked={note.done}
                onChange={() => handleCheckboxChange(note.id)}
              />
            </label>
          </div>
        </div>

        <div className='item-body flex'>
          <div className='note px-2'>
            <p>{note.content}</p>
          </div>

          <div className='edit-delete gap-3 pt-4'>
            <button onClick={() => {toggleAddNote(); setSelectedNote(note);}}>
              <FontAwesomeIcon icon={faEdit} className="text-red-500" />
            </button>
            <button onClick={() => handleDeleteNote(note.id)}>
              <FontAwesomeIcon icon={faTrashAlt} className="text-red-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;