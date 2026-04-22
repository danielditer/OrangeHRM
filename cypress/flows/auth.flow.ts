import { LoginPage } from '../pages/login.page'

export const loginFlow = (
    username: string,
    password: string
) => {
    const page = new LoginPage()

    cy.visit('/web/index.php/auth/login')

    page.username().type(username)
    page.password().type(password)
    page.submit().click()
}