declare namespace Cypress {
    interface Chainable {
        loginSession(): Chainable<void>
        toastSuccess(): Chainable<void>
        logout(): Chainable<void>
    }
}