// @ts-ignore
describe('Logout', () => {
    beforeEach(() => {
        cy.loginSession()
        cy.visit('/web/index.php/dashboard/index')
    })

    it('should logout successfully', () => {
        cy.logout()

        cy.url()
            .should('include', '/auth/login')
    })
})