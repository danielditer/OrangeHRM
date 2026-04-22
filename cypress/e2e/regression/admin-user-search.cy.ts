describe('Search Admin User', () => {
    beforeEach(() => {
        cy.loginSession()
        cy.visit('/web/index.php/dashboard/index')
    })

    it('should search admin user', () => {
        cy.contains('Admin').click()

        cy.get('.oxd-input')
            .eq(1)
            .type('Admin')

        cy.contains('Search').click()
    })
})