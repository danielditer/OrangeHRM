import { faker } from '@faker-js/faker'

export const userFactory = () => ({
    username: faker.internet.username(),
    password: 'Test12345!'
})