import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';
import './Todo.css';
import checkMark from '../../Assets/check-mark.png';
import { updateTodoState } from '../../redux/TodosSlice/TodosSlice';

export default React.memo(function Todo(props) {
  const dispatch = useDispatch();

  // Change state on checked
  const changeStatus = (event) => {
    event.stopPropagation();
    const newStatus = props.state === 'finished' ? 'unfinished' : 'finished';
    const newTodo = { ...props, state: newStatus };
    changeTodoState(props.id, newTodo);
  };

  // Change todo state beetween finished and unfinished in mocked server, then dispatch in Slice
  const changeTodoState = (id, todo) => {
    fetch(`${process.env.REACT_APP_LOCAL_URL}/${id}`, {
      method: 'PUT',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify(todo),
    }).then(() => dispatch(updateTodoState(todo)));
  };

  console.log(props);

  return (
    <article className='todo-container'>
      <Link
        to={`/${props.id}/${props.title}`}
        className={
          'todo-link' + (props.state === 'finished' ? ' finished' : '')
        }
      >
        {props.title}
      </Link>
      <label className={'todo-checkbox-label'}>
        <input
          type='checkbox'
          onChange={changeStatus}
          checked={props.state === 'finished' ? true : false}
          className='todo-checkbox'
        />
        <div
          className={
            'custom-checkbox' + (props.state === 'finished' ? ' finished' : '')
          }
        >
          <img
            src={checkMark}
            alt='custom check-mark'
            className={
              'custom-checkmark' +
              (props.state === 'finished' ? ' finished' : '')
            }
          />
        </div>
      </label>
    </article>
  );
});
