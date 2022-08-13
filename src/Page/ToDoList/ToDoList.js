import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import Header from '../../Layouts/Header/Header';
import Todo from '../../Component/Todo/Todo';
import CreateTodo from '../../Layouts/CreateTodo/CreateTodo';
import './ToDoList.css';
import { getAllTodos } from '../../redux/TodosSlice/TodosSlice';

export default function ToDoList() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos.data);

  // Get all todo on first rendering from mocked server
  useEffect(() => {
    if (todos.length === 0) {
      fetch(`${process.env.REACT_APP_LOCAL_URL}`)
        .then((response) => response.json())
        .then((data) => {
          dispatch(getAllTodos(data));
        });
    }
  }, []);

  return (
    <>
      <Header />
      <main>
        <h2>Mes Todo</h2>

        <div className='todolist-page-container'>
          <CreateTodo />
          <section className='todolist-display'>
            {/* Show all todo */}
            {todos.map((todo) => {
              return (
                <Todo
                  title={todo.title}
                  key={todo.id}
                  state={todo.state}
                  id={todo.id}
                />
              );
            })}
          </section>
        </div>
      </main>
    </>
  );
}
