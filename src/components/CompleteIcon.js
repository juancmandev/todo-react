import React from 'react';
import { TodoIcon } from './TodoIcon';

function CompleteIcon({ completed, onComplete }) {
  return (
    <TodoIcon
      type='check'
      color={completed ? '#00ead3' : 'gray'}
      onClick={onComplete}
    />
  );
}

export { CompleteIcon };
