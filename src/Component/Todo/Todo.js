import React, {useState} from 'react';
import './Todo.css';

export default function Todo(props) {

  const [status, setStatus] = useState(props.state)

  return (
    <div className={'todo-container'}>
      {props.title}
      <label className='todo-checkbox-label'>
        <input type='checkbox' checked={status === "finished" ? true : false} />
      </label>
    </div>
  );
}
