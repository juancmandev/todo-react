import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
// import './App.css';

const todos = [
  {
    text: 'Design landing page',
    completed: true,
  },
  {
    text: 'Program landing page',
    completed: false,
  },
  {
    text: 'Deploy landing page',
    completed: false,
  },
];

function App(props) {
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {todos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
