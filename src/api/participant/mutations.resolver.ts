import { Context } from '../../context'

export const Mutation = {
    async createParticipant({}, { input }, context: Context, info) {
        return context.participant.save(input, info)
    },
}
