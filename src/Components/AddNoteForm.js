import React from 'react'

function AddNoteForm({
    showAddNote,
    newNote,
    selectedNote,
    handleInputChange,
    handleSaveNote,
  }) {
    return (
      showAddNote && (
        <div className="add-note-container absolute top-20 left-0 right-0 bg-white p-4 rounded-xl">
          <input
            type="text"
            name="title"
            value={selectedNote ? selectedNote.title : newNote.title}
            onChange={handleInputChange}
            placeholder="Title"
          />
          <textarea
            name="content"
            value={selectedNote ? selectedNote.content : newNote.content}
            onChange={handleInputChange}
            placeholder="Content"
          />
  
          <select
            name="priority"
            value={selectedNote ? selectedNote.priority : newNote.priority}
            onChange={handleInputChange}
            className='p-2'
          >
            <option value="" hidden>
              Priority
            </option>
            {[0, 1, 2, 3, 4, 5].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
  
          <input
            type="date"
            name="dueDate"
            value={selectedNote ? selectedNote.dueDate : newNote.dueDate}
            onChange={handleInputChange}
            placeholder="Due Date"
          />
          <button onClick={handleSaveNote}>Save</button>
        </div>
      )
    );
  }
  
  export default AddNoteForm;
