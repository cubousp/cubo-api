import { Context } from '../../../context'

export const inscriptionMutations = {
    enrollParticipant(
        {}, { input: { activityId, participantId } }, context: Context, info,
    ) {
        return context.inscription.createInscription(
            activityId, participantId, info,
        )
    },
}
