import './App.css';
import { Routes, Route } from 'react-router-dom';
import ToDoList from './Page/ToDoList/ToDoList';

function App() {
  return (
    <Routes>
      <Route path='/' element={<ToDoList />}/>
    </Routes>
);
}

export default App;
