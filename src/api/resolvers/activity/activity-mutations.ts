import { Context } from '../../../context'

export const activityMutations = {

    async createActivity({}, { input }, context: Context, info) {
        return context.activity.save(input, info)
    },

    async updateActivity({}, { id, input }, context: Context, info) {
        return context.activity.update(id, input, info)
    },

    async deleteActivity({}, { id }, context: Context) {
        await context.activity.delete(id)
        return 'Success'
    },
}
