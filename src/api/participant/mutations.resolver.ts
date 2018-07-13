import { Context } from '../../context'
import { TransparentError } from '../utils/error'

export const Mutation = {
    async createParticipant({}, { input }, context: Context, info) {
        return context.participant.save(input, info)
    },

    async enrollToActivity({}, { activityId }, context: Context, info) {
        const activity = await context.activity.get(activityId, undefined)
        if (await context.activity.getAvailableVacanciesFor(activity) === 0) {
            throw new TransparentError(
                'No available vacancies for this activity',
                NoAvailableVacanciesError,
            )
        }

        const participant = await context.participant.getByEmail(
            context.currentUser!.email,
        )

        await context.inscription.create(activityId, participant!.id)
},
    async disenrollFromActivity({}, { inscriptionId }, context: Context, info) {

        await context.inscription.delete(inscriptionId)

        return 'Success'
    },

    async signUp({}, { input }, context: Context, info) {
        return await context.participant.save(input, info)
    },
}

const NoAvailableVacanciesError = 'NoAvailableVacancies'
