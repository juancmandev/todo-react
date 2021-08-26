import React from 'react';
import '../styles/TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);

  return (
    <h2 className='TodoCounter'>
      You've completedTodos {completedTodos} of {totalTodos} TODOs
    </h2>
  );
}

export { TodoCounter };
