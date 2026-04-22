import { faker } from '@faker-js/faker'

export const employeeFactory = () => ({
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName()
})