import React from 'react';
import '../styles/TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className='TodoSearch'
      placeholder='Search a task'
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
