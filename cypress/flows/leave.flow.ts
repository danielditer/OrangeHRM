import { LeavePage } from '../pages/leave.page'

export const requestLeaveFlow = () => {
    const page = new LeavePage()

    page.menu().click()
    page.apply().click()
}