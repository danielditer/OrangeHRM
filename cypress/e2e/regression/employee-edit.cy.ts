import { employeeFactory } from '../../factories/employee.factory'
import { captureVisibleEmployeeId } from "../../support/employee";

describe('Edit Employee', () => {
    beforeEach(() => {
        cy.loginSession()
        cy.visit('/web/index.php/dashboard/index')
    })

    it('should edit employee by Employee ID', () => {
        const employee = employeeFactory()

        cy.contains('PIM').click()
        cy.contains('Add Employee').click()

        cy.get('[name="firstName"]').type(employee.firstName)
        cy.get('[name="lastName"]').type(employee.lastName)

        cy.contains('Save').click()

        captureVisibleEmployeeId().then((employeeId) => {
            cy.contains('Employee List').click()

            cy.intercept('GET', '**/api/v2/pim/employees**').as('employees')

            cy.get('.oxd-form input')
                .eq(1)
                .clear()
                .type(employeeId)

            cy.contains('button', 'Search').click()

            cy.wait('@employees')

            cy.contains(employeeId).click()

            cy.get('[name="firstName"]')
                .clear()
                .type('Updated')

            cy.contains('Save').click()

            cy.contains('Successfully Updated')
                .should('be.visible')
        })
    })
})