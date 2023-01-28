import { render, screen } from '@testing-library/react';
import App from './App';
import translations from './translations.json';

test('renders the correct header', () => {
  render(<App />);
  const headerElement = screen.getByText(translations.app.header);
  expect(headerElement).toBeInTheDocument();
});
