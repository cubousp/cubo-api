import { Context } from '../../../context'

export const participantsQueries = {
    async participants({}, { limit, last }, context: Context, info) {
        return context.participant.participants(limit, last)
    },
}
