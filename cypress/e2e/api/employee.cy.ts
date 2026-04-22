describe('API Employee', () => {
    it('should return employee page', () => {
        cy.request('/web/index.php/pim/viewEmployeeList')
            .its('status')
            .should('eq', 200)
    })
})