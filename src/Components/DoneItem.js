import React from 'react';

function DoneItem({ note }) {
  return (
    <div key={note.id} className="done-item mb-7">
      <div className="item rounded-xl p-2 mt-[14.5px] pb-[14px]">
        <div className="item-header rounded-t-xl h-8 px-2">
          <div className="flex items-center text-white text-sm gap-2">
            <p className="priority">({note.priority})</p>
            <p className="item-title">{note.title}</p>
          </div>

          
        </div>

        <div className="item-body flex">
          <div className="note px-2">
            <p>{note.content}</p>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default DoneItem;