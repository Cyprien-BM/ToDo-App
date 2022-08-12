import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ToDoList, {orderTodos} from './ToDoList';

describe('ToDoList', () => {
  test('renders todos if request succeeds', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: '4', title: 'test todo' }],
    });
    render(
      <Router>
        <ToDoList />
      </Router>
    );

    const testTodo = await screen.findByText('test todo');
    expect(testTodo).toBeInTheDocument();
  });
});
