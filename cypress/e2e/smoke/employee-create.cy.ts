import { employeeFactory } from '../../factories/employee.factory'

// @ts-ignore
describe('Create Employee', () => {
    beforeEach(() => {
        cy.loginSession()
        cy.visit('/web/index.php/dashboard/index')
    })

    it('should create employee', () => {
        const employee = employeeFactory()
        const uniqueId = `${Date.now()}`.slice(-4)

        cy.contains('PIM').click()
        cy.contains('Add Employee').click()

        cy.get('[name="firstName"]').type(employee.firstName)
        cy.get('[name="lastName"]').type(employee.lastName)

        cy.get('.oxd-form input')
            .eq(4)
            .clear()
            .type(uniqueId)

        cy.contains('Save').click()

        cy.url({ timeout: 10000 })
            .should('include', 'viewPersonalDetails')
    })
})