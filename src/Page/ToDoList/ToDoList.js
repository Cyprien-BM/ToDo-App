import { React, useState, useEffect } from 'react';
import Header from '../../Layouts/Header/Header';
import Todo from '../../Component/Todo/Todo';
import './ToDoList.css';

export default function ToDoList() {
  const [todoList, setTodoList] = useState([]);

  // Get all todo on first rendering from mocked server
  useEffect(() => {
    console.log('aze');
    if (todoList.length === 0) {
      fetch('http://localhost:8080/todos/')
        .then((response) => response.json())
        .then((data) => {
          setTodoList(orderTodos(data));
        });
    }
  }, []);

  // Change todo state beetween finished and unfinished in mocked server
  const changeTodoState = (id, newState) => {
    fetch(`http://localhost:8080/todos/${id}`, {
      method: 'PATCH',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify({ state: newState }),
    }).then(() => updateStateOnTodoList(id, newState));
  };

  // Update todoList state with new checked or unchecked todo
  const updateStateOnTodoList = (id, newState) => {
    const newTodoList = [...todoList];
    newTodoList.forEach((todo) => {
      if (todo.id === id) {
        todo.state = newState;
      }
    });
    setTodoList(orderTodos(newTodoList));
  };

    // Order todos, first by state from unfinished to finished and then, by date from newer to older
  const orderTodos = (todoToSort) => {
    // get todoList from parameter or from todoList state
    if (!todoToSort) {
      todoToSort = [...todoList];
    }
    return todoToSort.sort(
      (a, b) =>
        b.state.localeCompare(a.state) || b.createdAt.localeCompare(a.createdAt)
    );
  };

  return (
    <>
      <Header />
      <main>
        <h2>Mes Todo</h2>
        {/* Show all todo */}
        {todoList.map((todo) => {
          return (
            <Todo
              title={todo.title}
              key={todo.id}
              state={todo.state}
              id={todo.id}
              changeTodoState={changeTodoState}
            />
          );
        })}
      </main>
    </>
  );
}
