import { Context } from '../../../context'

export const activityQueries = {

    async eventSchedule({}, {}, context: Context) {
        return context.activity.getAll()
    },

    async activity({}, { id }, context: Context, info) {
        return context.activity.get(id, info)
    },
}
