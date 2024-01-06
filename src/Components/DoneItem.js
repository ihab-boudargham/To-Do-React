import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { useNotesStore } from '../useNotesStore';
import { formatDistanceToNow } from 'date-fns';
import { isAfter, addDays, isBefore } from 'date-fns';

function DoneItem({ note }) {
  const { toggleAddNote, setSelectedNote, handleDeleteNote, handleCheckboxChange, sortNotesByDueDate } = useNotesStore();
  const isDueSoon = isAfter(new Date(note.dueDate), new Date()) && isBefore(new Date(note.dueDate), addDays(new Date(), 1));

  return (
    <div key={note.id} className="done-item mb-5">
      <div className={`item rounded-xl p-2 ${note.done ? 'done-color' : ''}`}>
        <div className="item-header rounded-t-xl h-8 px-2">
          <div className="flex items-center text-white text-sm gap-2">
            <p className={`priority ${note.done ? 'done' : ''}`}>
              ({note.priority})
            </p>
            <p className={`item-title ${note.done ? 'done' : ''}`}>
              {note.title}
            </p>
          </div>
          <div className="flex items-center ml-auto gap-5 text-sm">
            <p className={`day ${note.done ? 'done' : ''}`}>
                {formatDistanceToNow(new Date(note.dueDate), { addSuffix: true })}
            </p>

            <label className={`checkbox-container pt-1 ${note.done ? 'done' : ''}`}>
              <input
                type="checkbox"
                className="hidden-checkbox"
                checked={note.done}
                onChange={() => handleCheckboxChange(note.id)}
              />
            </label>

          </div>
        </div>

        <div className="item-body flex">
          <div className={`note px-2 ${note.done ? 'done' : ''}`}>
            <p>{note.content}</p>
          </div>
        </div>

        <div className="edit-delete gap-3 ml-5">
          <button onClick={() => { toggleAddNote(); setSelectedNote(note); }}>
            <FontAwesomeIcon icon={faEdit} className="text-red-500" />
          </button>
          <button onClick={() => handleDeleteNote(note.id)}>
            <FontAwesomeIcon icon={faTrashAlt} className="text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DoneItem;