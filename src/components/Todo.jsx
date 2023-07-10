import React from 'react'


export default function Todo(props) {
  return (
    <div className="Todo-container">
      <ul className="todo-list">
        {props.todos.map((todo, index) => (
          <li key={index}>{todo.message}
          <button onClick={() => props.handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
