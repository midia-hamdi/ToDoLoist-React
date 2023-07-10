import React from 'react'


export default function Todo(props) {
  return (
    <div className="Todo-container">
      <ul className="todo-list">
        {props.todos.map((todo, index) => (
          <li key={index}>{todo.message}</li>
        ))}
      </ul>
    </div>
  );
}
