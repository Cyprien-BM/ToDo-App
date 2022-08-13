import React, { useState, useRef } from 'react';
import Buttons from '../../Component/Button/Button';
import './CreateTodo.css';
import { GetNewId } from '../../Utils/GetNewId';
import { useSelector, useDispatch } from 'react-redux';
import { createNewTodoSlice } from '../../redux/TodosSlice/TodosSlice';

export default function CreateTodo() {
  const inputTitle = useRef();
  const titleErrorMessage = useRef();

  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos.data);

  const [todo, setTodo] = useState({
    id: 0,
    title: '',
    description: '',
    state: 'unfinished',
    createdAt: '',
  });

  //Data binding
  const handleInput = (event) => {
    if (event.target.id === 'todo-input-title') {
      const newTodo = { ...todo, title: event.target.value };
      setTodo(newTodo);
    }
    if (event.target.id === 'todo-input-description') {
      const newTodo = { ...todo, description: event.target.value };
      setTodo(newTodo);
    }
  };

  // Update todo state with new id and date and create the new todo
  const createNewTodo = (event) => {
    event.preventDefault();
    if (!inputVerification()) {
      return;
    }
    const dateNow = new Date().toISOString();
    const newId = GetNewId(todos);
    const newTodo = { ...todo, id: newId, createdAt: dateNow };
    fetchPutNewTodo(newTodo);
  };

  //Send todo to back
  const fetchPutNewTodo = (newTodo) => {
    fetch(`${process.env.REACT_APP_LOCAL_URL}`, {
      method: 'POST',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify(newTodo),
    }).then((response) => {
      if (response.status === 201) {
        dispatch(createNewTodoSlice(newTodo));
      }
    });
  };

  // Check if title input is null
  const inputVerification = () => {
    if (!todo.title) {
      inputTitle.current.className = 'error';
      titleErrorMessage.current.innerText = 'Titre obligatoire';
      titleErrorMessage.current.className = 'title-error-message';
      return false;
    }
    inputTitle.current.className = '';
    titleErrorMessage.current.innerText = '';
    titleErrorMessage.current.className = 'hidden';
    return true;
  };

  return (
    <section className='create-todo'>
      <h3>Créer une nouvelle Todo</h3>
      <form
        className='create-todo-form'
        onSubmit={(event) => createNewTodo(event)}
      >
        <div className='create-todo-input-container'>
          <label htmlFor='todo-input-title'>Titre *</label>
          <input
            ref={inputTitle}
            type='text'
            id='todo-input-title'
            onInput={(event) => handleInput(event)}
            value={todo.title}
          />
          <p className='hidden' ref={titleErrorMessage}></p>
        </div>
        <div className='create-todo-input-container'>
          <label htmlFor='todo-input-description'>Description</label>
          <textarea
            type='text'
            id='todo-input-description'
            onInput={(event) => handleInput(event)}
            value={todo.description}
          />
        </div>
        <Buttons txt='Créer' />
      </form>
    </section>
  );
}
