describe('Delete Employee', () => {
    beforeEach(() => {
        cy.loginSession()
        cy.visit('/web/index.php/dashboard/index')
    })

    it('should delete employee', () => {
        cy.contains('PIM').click()

        cy.get('.bi-trash')
            .first()
            .click()

        cy.contains('Yes, Delete').click()
    })
})