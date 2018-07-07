import { Context } from '../../../context'

export const participantMutations = {
    async createParticipant({}, { input }, context: Context, info) {
        return context.participant.createParticipant(input, info)
    },
}
