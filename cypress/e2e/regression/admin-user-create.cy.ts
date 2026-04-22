describe('Create Admin User', () => {
    beforeEach(() => {
        cy.loginSession()
        cy.visit('/web/index.php/dashboard/index')
    })

    it('should open create admin user form', () => {
        cy.contains('Admin').click()
        cy.contains('Add').click()
    })
})