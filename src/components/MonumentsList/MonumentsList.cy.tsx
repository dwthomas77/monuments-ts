import { mount } from 'cypress/react18';
import MonumentsList from './MonumentsList';
import TEST_IDS from '../../testIds/MonumentsList.json';
import { convertTestIdToAttr } from '../../utils';
import translations from '../../translations.json';

describe('<MonumentsList />', () => {
  it('renders', () => {
    const itemClickTestFunction = (uid: string) => {console.log(uid)};
    // see: https://on.cypress.io/mounting-react
    mount(<MonumentsList testId='testId' list={[]} onItemClick={itemClickTestFunction} />);
    cy.get(convertTestIdToAttr(TEST_IDS.HEADER)).should('have.text', translations.monumentsList.header);
  });
});