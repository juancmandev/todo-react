import React from 'react';
import '../styles/TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos }) {
  return (
    <h2 className='TodoCounter'>
      You've completed {completedTodos} of {totalTodos} TODOs
    </h2>
  );
}

export { TodoCounter };
