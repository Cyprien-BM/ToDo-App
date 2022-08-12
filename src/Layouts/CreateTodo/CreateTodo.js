import React, { useState, useRef } from 'react';
import Buttons from '../../Component/Button/Button';
import './CreateTodo.css';

export default function CreateTodo() {
  const inputTitle = useRef();
  const titleErrorMessage = useRef();

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

  const createNewTodo = (event) => {
    event.preventDefault();
    console.log('ici');
    if (!todo.title) {
      console.log(inputTitle);
      inputTitle.current.className = 'error'
      titleErrorMessage.current.innerText = 'Titre obligatoire'
    }
  };

  console.log(todo);

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
          <p className='title-error-message' ref={titleErrorMessage}></p>
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
