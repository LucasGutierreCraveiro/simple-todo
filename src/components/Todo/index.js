import React, { useState } from 'react'
import { TodoForm } from '../../components'
import './styles.css';


export default function Todo({ todos, completeTodo, removeTodo, editTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: null,
  })

  const submitUpdate = value => {
    editTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    })
  }

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div className={todo.completed ? 'todo-row complete' : 'todo-row'} key={index}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.title}
      </div>
      <div className='icons'>
        <button className='button' type="button" onClick={() => removeTodo(todo.id)}> Remover To-Do</button>
        <button className='button' type="button" onClick={() => setEdit({ id: todo.id, value: todo.title })}> Alterar To-Do </button>
      </div>
    </div>

  ))
}
