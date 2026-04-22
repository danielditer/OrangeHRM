import { employeeFactory } from '../../factories/employee.factory'

describe('Edit Employee', () => {
    beforeEach(() => {
        cy.loginSession()
        cy.visit('/web/index.php/dashboard/index')
    })

    it('should edit employee record after creating it', () => {
        const employee = employeeFactory()

        cy.contains('PIM').click()

        cy.contains('Add Employee').click()

        cy.get('[name="firstName"]').type(employee.firstName)
        cy.get('[name="lastName"]').type(employee.lastName)

        cy.contains('Save').click()

        cy.url({ timeout: 10000 }).should('include', 'viewPersonalDetails')

        cy.contains('Employee List').click()

        cy.intercept('GET', '**/api/v2/pim/employees**').as('employees')

        cy.contains('label', 'Employee Name')
            .parents('.oxd-input-group')
            .find('input')
            .type(`${employee.firstName} ${employee.lastName}`, { delay: 50 })

        cy.contains('button', 'Search').click()

        cy.wait('@employees')

        cy.get('.oxd-table-body', { timeout: 10000 })
            .contains(employee.firstName)
            .click()

        cy.get('[name="firstName"]', { timeout: 10000 })
            .clear()
            .type('Updated')

        cy.contains('Save').click()
        
        cy.contains('Successfully Updated', { timeout: 10000 })
            .should('be.visible')
    })
})