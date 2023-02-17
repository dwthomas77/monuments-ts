import { render } from '@testing-library/react';
import MonumentsList from './MonumentsList';
import TEST_IDS from '../../testIds/MonumentsList.json';
import translations from '../../translations.json';
import { convertTestIdToAttr } from '../../utils';
import { MonumentType } from '../../services/monuments';

const componentTestId = 'test';
const monumentListTest: MonumentType[] = [];
const itemClickTestFunction = (uid: string) => {console.log(uid)};

it('renders with the correct test id and header text', () => {
  const {container} = render(<MonumentsList onItemClick={itemClickTestFunction} list={monumentListTest} testId={componentTestId} />);
  const listElement = container.querySelector(convertTestIdToAttr(componentTestId));
  const listHeaderElement = listElement?.querySelector(convertTestIdToAttr(TEST_IDS.HEADER))
  console.log(listElement)
  expect(listHeaderElement).toHaveTextContent(translations.monumentsList.header);
});