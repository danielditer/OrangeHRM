export class LoginPage {
  username = () => cy.get('[name="username"]')
  password = () => cy.get('[name="password"]')
  submit = () => cy.get('button[type="submit"]')
  error = () => cy.contains('Invalid credentials')
}