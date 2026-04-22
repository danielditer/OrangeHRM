export class DashboardPage {
    title = () => cy.contains('Dashboard')
    userMenu = () => cy.get('.oxd-userdropdown-name')
}