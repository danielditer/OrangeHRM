export const captureVisibleEmployeeId = () => {
    return cy.contains('label', 'Employee Id')
        .parent()
        .parent()
        .find('input')
        .invoke('val')
        .then((id) => String(id))
}