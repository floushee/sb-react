import { render, screen } from '@testing-library/react';
import App from '../../main/js/App';

test('renders learn react link', () => {
  render(<App />);
  const text = screen.getByText(/React with Spring Boot/i);
  expect(text).toBeInTheDocument();
});
