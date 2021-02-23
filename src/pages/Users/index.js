import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom'
import './styles.css';

export default function Users() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get('users').then(response => {
      setUsers(response.data);
    })
  }, []);


  return (
    <div className='container'>
      <strong>Acessar To-do por usuario: </strong>
      <ul className='usergrid'>
        {users.map(user => (
          <li key={user.id}>
            <Link className='card' to={location => `todo/${user.id}/${user.name}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div >

  )
}
