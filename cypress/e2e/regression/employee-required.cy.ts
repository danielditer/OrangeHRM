describe('Required Fields', () => {
    beforeEach(() => {
        cy.loginSession()
        cy.visit('/web/index.php/dashboard/index')
    })

    it('should validate required fields', () => {
        cy.contains('PIM').click()
        cy.contains('Add Employee').click()
        cy.contains('Save').click()

        cy.contains('Required')
            .should('be.visible')
    })
})