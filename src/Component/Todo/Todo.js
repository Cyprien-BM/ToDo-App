import React, { useState } from 'react';
import './Todo.css';
import checkMark from '../../Assets/check-mark.png';

export default function Todo(props) {
  const [status, setStatus] = useState(props.state);

  const changeStatus = () => {
    const newStatus = status === 'finished' ? 'unfinished' : 'finished';
    setStatus(newStatus);
    props.changeTodoState(props.id, newStatus);
    // props.orderTodos()
  };

  return (
    <div className='todo-container'>
      {props.title}
      <label
        className={
          'todo-checkbox-label' + (status === 'finished' ? ' finished' : '')
        }
      >
        <input
          type='checkbox'
          onChange={changeStatus}
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
    </div>
  );
}
