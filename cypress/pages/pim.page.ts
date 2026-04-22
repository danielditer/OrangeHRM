export class PimPage {
    menu = () => cy.contains('PIM')
    addEmployee = () => cy.contains('Add Employee')
    firstName = () => cy.get('[name="firstName"]')
    lastName = () => cy.get('[name="lastName"]')
    save = () => cy.contains('Save')
    searchInput = () => cy.get('.oxd-input').eq(1)
    searchBtn = () => cy.contains('Search')
    deleteBtn = () => cy.get('.bi-trash').first()
}