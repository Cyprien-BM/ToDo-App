import { React, useState, useEffect } from 'react';
import Header from '../../Layouts/Header/Header';
import Todo from '../../Component/Todo/Todo';
import './ToDoList.css'

export default function ToDoList() {
  const [todoList, setTodoList] = useState([]);

  // Get all todo on first rendering
  useEffect(() => {
    if (todoList.length === 0) {
      fetch('http://localhost:8080/todos/')
        .then((response) => response.json())
        .then((data) => {
          setTodoList(orderTodos(data));
        });
    }
  }, []);
  
  // Order todos, order first by state from unfinished to finished and then, order by date from newer to older
  const orderTodos = (todos) => {
    return todos.sort((a, b) => b.state.localeCompare(a.state) || b.createdAt.localeCompare(a.createdAt))
  }

  return (
    <>
      <Header />
      <main>
        <h2>Mes Todo</h2>
        {/* Show all todo */}
        {todoList.map((todo) => {
          return <Todo title={todo.title} key={todo.id} state={todo.state}/>;
        })}
      </main>
    </>
  );
}
