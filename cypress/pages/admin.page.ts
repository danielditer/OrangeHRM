export class AdminPage {
    menu = () => cy.contains('Admin')
    addBtn = () => cy.contains('Add')
    searchInput = () => cy.get('.oxd-input').eq(1)
    searchBtn = () => cy.contains('Search')
}