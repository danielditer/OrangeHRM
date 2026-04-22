describe('Dashboard', () => {
    beforeEach(() => {
        cy.loginSession()
        cy.visit('/web/index.php/dashboard/index')
    })

    it('should load dashboard', () => {
        cy.contains('Dashboard')
            .should('be.visible')
    })
})