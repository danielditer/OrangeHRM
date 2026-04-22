describe('Search Employee', () => {
    beforeEach(() => {
        cy.loginSession()
        cy.visit('/web/index.php/dashboard/index')
    })

    it('should search employee', () => {
        cy.contains('PIM').click()

        cy.get('.oxd-input')
            .eq(1)
            .type('John')

        cy.contains('Search').click()
    })
})