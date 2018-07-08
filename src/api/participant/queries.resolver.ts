import { Context } from '../../context'

export const Query = {
    async participants({}, { limit, last }, context: Context) {
        return context.participant.participants(limit, last)
    },

    async participant({}, { id }, context: Context, info) {
        return context.participant.get(id, info)
    },
}
