import { render, screen } from '@testing-library/react';
import App from './App';
import translations from './translations.json';
import APP_TEST_IDS from './testIds/app.json';

it('Renders the correct header', () => {
  render(<App />);
  const headerElement = screen.getByText(translations.app.header);
  expect(headerElement).toBeInTheDocument();
});

it('renders the MonumentList component', () => {
  const {getByTestId} = render(<App />);
  const listElement = getByTestId(APP_TEST_IDS.LIST);
  expect(listElement).toBeInTheDocument();
})
