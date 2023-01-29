import translations from '../../src/translations.json';
import {TEST_IDS} from '../../src/App';

describe('app loads correctly', () => {
  it('loads!', () => {
    cy.visit('http://localhost:3000/');
  });
  it('displays the correct header', () => {
    cy.visit('http://localhost:3000/');
    cy.get('h1')
      .should('have.text', translations.app.header);
  });
  it('displays the Monument List component', () => {
    cy.visit('http://localhost:3000/');
    console.log(TEST_IDS)
    cy.get('[data-test-id="list-component"]').should('exist');
  });
});