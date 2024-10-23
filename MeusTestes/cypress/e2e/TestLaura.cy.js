describe('Acesso ao google', () => {
  it('passes', () => {
    cy.visit('https://www.google.com');
    cy.get('[name="q"]').type('Shawn Mendes');
  })
})