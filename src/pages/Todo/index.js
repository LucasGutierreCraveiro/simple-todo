import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { TodoList } from '../../components';

export default function Todo() {
  const { id, username } = useParams();
  const history = useHistory();

  const goBack = () => {
    localStorage.clear();
    history.push('/');

  }

  return (
    <div>
      <button onClick={goBack} type="button"> Voltar </button>
      <TodoList id={id} userName={username} />
    </div>
  )
}
