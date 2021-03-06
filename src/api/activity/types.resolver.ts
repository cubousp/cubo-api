import { Context } from '../../context'

export const Activity = {
    async vacancies({ id }, _, context: Context) {
        const activity = await context.activity.get(id)
        return {
            available: context.activity.getAvailableVacanciesFor(activity),
            total: activity!.totalVacancies,
        }
    },
}