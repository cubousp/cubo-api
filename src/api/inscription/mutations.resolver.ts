import { Context } from '../../context'

export const Mutation = {
    enrollParticipant(
        _, { activityId, participantId }, context: Context, info
    ) {
        return context.inscription.createInscription(
            activityId, participantId, info,
        )
    },

    async disenrollParticipant({}, { inscriptionId }, context: Context) {
        await context.inscription.delete(inscriptionId)
        return 'Success'
    },
}
