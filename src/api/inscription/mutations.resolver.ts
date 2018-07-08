import { Context } from '../../context'

export const Mutation = {
    enrollParticipant(
        _, { activityId, participantId }, context: Context, info
    ) {
        return context.inscription.create(
            activityId, participantId, info,
        )
    },

    async disenrollParticipant({}, { inscriptionId }, context: Context) {
        await context.inscription.delete(inscriptionId)
        return 'Success'
    },
}
