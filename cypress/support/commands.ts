import {loginFlow} from '../flows/auth.flow'

Cypress.Commands.add('loginSession', () => {
    cy.session('admin-session', () => {
        loginFlow(
            Cypress.env('username'),
            Cypress.env('password')
        )

        cy.url().should('include', 'dashboard')
    })
})

Cypress.Commands.add('toastSuccess', () => {
    cy.get('.oxd-toast')
        .should('be.visible')
})

Cypress.Commands.add('logout', () => {
    cy.url().then((url) => {
        if (url.includes('/dashboard')) {
            cy.get('.oxd-userdropdown-name').click()
            cy.contains('Logout').click()
        }
    })
})