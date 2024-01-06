import React from 'react';
import { useNotesStore } from '../useNotesStore';

function SearchBar({ toggleAddNote }) {
  const { setSearch } = useNotesStore();

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="flex gap-[1vw]">
      <button className="add h-50px rounded-xl" onClick={toggleAddNote}>
        +
      </button>
      <input
        type="text"
        className="search h-50px rounded-xl p-2"
        placeholder="Search"
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default SearchBar;