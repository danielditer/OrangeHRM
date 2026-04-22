import { PimPage } from '../pages/pim.page'

type Employee = {
    firstName: string
    lastName: string
}

export const createEmployeeFlow = (
    employee: Employee
) => {
    const page = new PimPage()

    page.menu().click()
    page.addEmployee().click()

    page.firstName().clear().type(employee.firstName)
    page.lastName().clear().type(employee.lastName)

    page.save().click()
}