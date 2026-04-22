// @ts-ignore
describe('Invalid Login', () => {
    it('should show invalid credentials', () => {
        cy.visit('/web/index.php/auth/login')

        cy.get('[name="username"]').type('wrong')
        cy.get('[name="password"]').type('wrong')
        cy.get('[type="submit"]').click()

        cy.contains('Invalid credentials')
            .should('be.visible')
    })
})