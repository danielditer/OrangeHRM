describe('Duplicate Username', () => {
    beforeEach(() => {
        cy.loginSession()
        cy.visit('/web/index.php/dashboard/index')
    })

    it('should validate duplicate username flow', () => {
        cy.contains('Admin').click()
        cy.contains('Add').click()
    })
})