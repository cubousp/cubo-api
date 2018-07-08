import { Context } from '../../context'

export const Query = {
    async eventSchedule({}, {}, context: Context, info) {
        return context.activity.getAll(info)
    },

    async activity({}, { id }, context: Context, info) {
        return context.activity.get(id, info)
    },
}
