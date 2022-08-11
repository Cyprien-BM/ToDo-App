import React, { useEffect, useState } from 'react';
import Header from '../../Layouts/Header/Header';
import { useParams } from 'react-router-dom';
import './ToDoPage.css'

export default function ToDoPage() {
  const { id } = useParams();

  const [todo, setTodo] = useState({});

  // Get the right todo with id from URL
  useEffect(() => {
    fetch(`http://localhost:8080/todos/${id}`)
      .then((response) => response.json())
      .then((data) => setTodo(data));
  }, []);

  return (
    <>
      <Header />
      <main className='todo-page-main'>
        <h2>{todo.title}</h2>
        <div className='todo-page-data'>
          <div className='todo-description'>
            <h3>Déscription :</h3>
            <p>{todo.description}</p>
          </div>
          <div className='todo-state'>
            <h3>Status :</h3>
            <p>{todo.state === 'finished' ? 'Terminé' : 'A faire'}</p>
          </div>
        </div>
      </main>
    </>
  );
}
