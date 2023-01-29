import { render, screen } from '@testing-library/react';
import App from './App';
import translations from './translations.json';
import APP_TEST_IDS from './testIds/app.json';

it('renders the correct header', () => {
  render(<App />);
  const headerElement = screen.getByText(translations.app.header);
  expect(headerElement).toBeInTheDocument();
});

it('renders the MonumentList component', () => {
  const {container} = render(<App />);
  const listElement = container.querySelector(`[data-test-id="${APP_TEST_IDS.list}"]`);
  expect(listElement).toBeInTheDocument();
})
