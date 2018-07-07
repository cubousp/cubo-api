import { Context } from '../../../context'

export const inscriptionMutations = {
    enrollParticipant(
        {}, { activityId, participantId }, context: Context, info,
    ) {
        return {
            activity: {
                id: ' bla',
                title: 'bla',
            },
            createdAt: new Date().toISOString(),
            participant: {
                id: ' bla',
                name: 'jdlakjdkla',
            },
            status: 'PENDING',
        }
        // return context.inscription.createInscription(
        //     activityId, participantId, info,
        // )
    },
}
