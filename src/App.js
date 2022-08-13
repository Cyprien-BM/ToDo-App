import './App.css';
import { Routes, Route } from 'react-router-dom';
import ToDoList from './Page/ToDoList/ToDoList';
import ToDoPage from './Page/ToDoPage/ToDoPage';
import NotFound from './Page/NotFound/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<ToDoList />} />
      <Route path='/:id/:title' element={<ToDoPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
