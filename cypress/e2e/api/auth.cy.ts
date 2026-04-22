describe('API Auth', () => {
    it('should return 200 for login page', () => {
        cy.request('/web/index.php/auth/login')
            .its('status')
            .should('eq', 200)
    })
})