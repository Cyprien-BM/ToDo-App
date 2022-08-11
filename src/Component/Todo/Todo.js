import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Todo.css';
import checkMark from '../../Assets/check-mark.png';

export default function Todo(props) {
  const [status, setStatus] = useState(props.state);

  const changeStatus = (event) => {
    event.stopPropagation();
    const newStatus = status === 'finished' ? 'unfinished' : 'finished';
    setStatus(newStatus);
    props.changeTodoState(props.id, newStatus);
    // props.orderTodos()
  };

  return (
    <article className='todo-container'>
      <Link to={`/${props.id}/${props.title}`} className='todo-link'>{props.title}
      </Link>
      <label
        className={
          'todo-checkbox-label' + (status === 'finished' ? ' finished' : '')
        }
      >
        <input
          type='checkbox'
          onChange={(event) => changeStatus(event)}
          checked={status === 'finished' ? true : false}
          className='todo-checkbox'
        />
        <div className='custom-checkbox'>
          <img
            src={checkMark}
            alt='custom check-mark'
            className='custom-checkmark'
          />
        </div>
      </label>
    </article>
  );
}
