import React from 'react'

function SearchBar({ toggleAddNote }) {
  return (
    <div className="flex gap-[1vw]">
      <button className="add h-50px rounded-xl" onClick={toggleAddNote}>
        +
      </button>
      <input
        type="text"
        className="search h-50px rounded-xl p-2"
        placeholder="Search"
      />
    </div>
  )
}

export default SearchBar
