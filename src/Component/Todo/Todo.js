import React, { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';
import './Todo.css';
import checkMark from '../../Assets/check-mark.png';
import { updateTodoState } from '../../redux/TodosSlice/TodosSlice';

export default React.memo(function Todo(props) {
  const dispatch = useDispatch();

  const [status, setStatus] = useState(props.state);

  // Change state status on checked
  const changeStatus = (event) => {
    event.stopPropagation();
    const newStatus = status === 'finished' ? 'unfinished' : 'finished';
    setStatus(newStatus);
    changeTodoState(props.id, newStatus);
  };

  // Change todo state beetween finished and unfinished in mocked server, then dispatch in Slice
  const changeTodoState = (id, newState) => {
    fetch(`http://localhost:8080/todos/${id}`, {
      method: 'PATCH',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify({ state: newState }),
    }).then(() => dispatch(updateTodoState({ id, newState })));
  };

  return (
    <article className='todo-container'>
      <Link
        to={`/${props.id}/${props.title}`}
        className={'todo-link' + (status === 'finished' ? ' finished' : '')}
      >
        {props.title}
      </Link>
      <label className={'todo-checkbox-label'}>
        <input
          type='checkbox'
          onChange={changeStatus}
          checked={status === 'finished' ? true : false}
          className='todo-checkbox'
        />
        <div className={'custom-checkbox' + (status === 'finished' ? ' finished' : '')}>
          <img
            src={checkMark}
            alt='custom check-mark'
            className={'custom-checkmark' + (status === 'finished' ? ' finished' : '')}
          />
        </div>
      </label>
    </article>
  );
});
