import React, { useState } from 'react';
import './Todo.css';


export default function Todo(props) {
  const [status, setStatus] = useState(props.state);

  const changeStatus = () => {
    const newStatus = status === 'finished' ? 'unfinished' : 'finished';
    setStatus(newStatus)
    props.changeTodoState(props.id, newStatus)
    // props.orderTodos()
  };

  return (
    <div className='todo-container'>
      <label
        className={
          'todo-checkbox-label' + (status === 'finished' ? ' finished' : '')
        }
      >
        {props.title}
        <input
          type='checkbox'
          onChange={changeStatus}
          checked={status === 'finished' ? true : false}
        />
      </label>
    </div>
  );
}
