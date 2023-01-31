import { render } from '@testing-library/react';
import MonumentsList from './MonumentsList';
import TEST_IDS from '../../testIds/MonumentsList.json';
import translations from '../../translations.json';
import { convertTestIdToAttr } from '../../utils';

const componentTestId = 'test';

it('renders with the correct test id and header text', () => {
  const {container} = render(<MonumentsList testId={componentTestId} />);
  const listElement = container.querySelector(convertTestIdToAttr(componentTestId));
  const listHeaderElement = listElement?.querySelector(convertTestIdToAttr(TEST_IDS.HEADER))
  expect(listHeaderElement).toHaveTextContent(translations.monumentsList.header);
});