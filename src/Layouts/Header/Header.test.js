import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

describe('Header', () => {
  test('Redirect to "/" when button is clicked', () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    const button = screen.getByRole('button');
    userEvent.click(button);

    expect(global.window.location.pathname).toEqual('/');
  });
});
