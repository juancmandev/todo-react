import React from 'react';
import '../styles/TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return [
    <input
      className='TodoSearch'
      placeholder='Add task'
      value={searchValue}
      onChange={onSearchValueChange}
    />,
    <p>{searchValue}</p>,
  ];
}

export { TodoSearch };
