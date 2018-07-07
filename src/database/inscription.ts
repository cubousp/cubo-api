import { client } from './client'

export class Inscription {
    public createInscription(
        activityId: string, participantId: string, info,
    ) {
        console.log('activityId: ', activityId)
        console.log('participantId: ', participantId)
        return client.mutation.createInscription(
            {
                data: {
                    activity: { connect: { id: activityId } },
                    participant: { connect: { id: participantId } },
                },
            },
            info,
        )
    }
}
