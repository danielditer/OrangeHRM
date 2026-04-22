import { AdminPage } from '../pages/admin.page'

export const openAdminFlow = () => {
    const page = new AdminPage()

    page.menu().click()
}