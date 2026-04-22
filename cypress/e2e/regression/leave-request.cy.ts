describe('Leave Request', () => {
    beforeEach(() => {
        cy.loginSession()
        cy.visit('/web/index.php/dashboard/index')
    })

    it('should open leave request page', () => {
        cy.contains('Leave').click()
        cy.contains('Apply').click()
    })
})