// @ts-ignore
describe('Login', () => {
  it('should login successfully', () => {
    cy.visit('/web/index.php/auth/login')

    cy.get('[name="username"]').type(
        Cypress.env('username')
    )

    cy.get('[name="password"]').type(
        Cypress.env('password')
    )

    cy.get('button[type="submit"]').click()

    cy.url().should('include', 'dashboard')
  })
})