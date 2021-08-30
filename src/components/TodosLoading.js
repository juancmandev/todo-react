import React from 'react';
import '../styles/TodosLoading.css';

function TodosLoading() {
  return (
    <div className='LoadingTodo-container'>
      <span className='LoadingTodo-completeIcon'></span>
        <p className='LoadingTodo-text'>We're loading, don't worry</p>
        <span className='LoadingTodo-deleteIcon'></span>
    </div>
  );
}

export { TodosLoading };
