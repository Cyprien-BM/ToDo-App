import './App.css';
import { Routes, Route } from 'react-router-dom';
import ToDoList from './Page/ToDoList/ToDoList';
import ToDoPage from './Page/ToDoPage/ToDoPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<ToDoList />} />
      <Route path='/:id/:title' element={<ToDoPage />} />
    </Routes>
  );
}

export default App;
