import React from 'react';
import DoneItem from './DoneItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faClock } from '@fortawesome/free-solid-svg-icons';

function DoneList({ notes }) {
    return (
      <div className="list-container overflow-y-auto h-[70vh]">
        <div className="list-head flex gap-[2vw] pl-[5vw] items-center">
          <h1 className='font-bold text-lg'>done items</h1>
          <span>-</span>
          <button><FontAwesomeIcon icon={faSort} style={{ color: 'red' }}/></button>
          <button><FontAwesomeIcon icon={faClock} /></button>
        </div>
  
        {notes.map((note, index) => {
          if (note.done) {
            return <DoneItem key={index} note={note} />;
          }
          return null;
        })}
      </div>
    );
  }
  
  export default DoneList;