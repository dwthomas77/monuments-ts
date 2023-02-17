import translations from '../../src/translations.json';
import APP_TEST_IDS from '../../src/testIds/app.json';

describe('app loads correctly', () => {
  it('loads!', () => {
    cy.visit('/');
  });
  it('displays the correct header', () => {
    cy.visit('/');
    cy.get('h1')
      .should('have.text', translations.app.header);
  });
  it('displays the Monument List component', () => {
    cy.visit('/');
    cy.get('[data-test="'+APP_TEST_IDS.LIST+'"]').should('exist');
  });
});