import React, { useEffect, useState } from 'react';
import Header from '../../Layouts/Header/Header';
import { useParams } from 'react-router-dom';
import './ToDoPage.css';
import Buttons from '../../Component/Button/Button';
import { useDispatch } from 'react-redux';
import { deleteTodoSlice } from '../../redux/TodosSlice/TodosSlice';
import { useNavigate } from 'react-router-dom';

export default function ToDoPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [todo, setTodo] = useState({});

  // Get the right todo with id from URL
  useEffect(() => {
    fetch(`${process.env.REACT_APP_LOCAL_URL}/${id}`)
      .then((response) => response.json())
      .then((data) => setTodo(data));
  }, []);

  const deleteTodo = () => {
    if (!window.confirm('Voulez-vous supprimer cette todo ?')) {
      return
    }
    fetch(`${process.env.REACT_APP_LOCAL_URL}/${id}`, {
      method: 'DELETE',
    }).then((response) => {
      if (response.status === 200) {
        dispatch(deleteTodoSlice(id));
        navigate('/');
      }
    });
  };

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
        <Buttons
          className='delete-button'
          txt='Supprimer'
          handleClick={deleteTodo}
        />
      </main>
    </>
  );
}
