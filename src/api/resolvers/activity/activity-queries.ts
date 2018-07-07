import { Context } from '../../../context'

export const activityQueries = {

    async eventSchedule({}, {}, context: Context) {
        return context.activity.getAll()
    },

}
