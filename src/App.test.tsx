import { render, screen } from '@testing-library/react';
import App, {TEST_IDS} from './App';
import translations from './translations.json';

it('renders the correct header', () => {
  render(<App />);
  const headerElement = screen.getByText(translations.app.header);
  expect(headerElement).toBeInTheDocument();
});

it('renders the MonumentList component', () => {
  const {container} = render(<App />);
  const listElement = container.querySelector(`[data-test-id="${TEST_IDS.list}"]`);
  expect(listElement).toBeInTheDocument();
})
