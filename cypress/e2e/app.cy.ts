import translations from '../../src/translations.json';

describe('app loads correctly', () => {
  it('loads!', () => {
    cy.visit('http://localhost:3000/');
  });
  it('displays the correct header', () => {
    cy.visit('http://localhost:3000/');
    cy.get('h1')
      .should('have.text', translations.app.header);
  });
});