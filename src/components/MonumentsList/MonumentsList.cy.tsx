import { mount } from 'cypress/react18';
import MonumentsList from './MonumentsList';
import TEST_IDS from '../../testIds/MonumentsList.json';
import { convertTestIdToAttr } from '../../utils';
import translations from '../../translations.json';

describe('<MonumentsList />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    mount(<MonumentsList testId='testId' />);
    cy.get(convertTestIdToAttr(TEST_IDS.HEADER)).should('have.text', translations.monumentsList.header);
  });
});