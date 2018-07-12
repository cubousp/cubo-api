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

        await context.inscription.desinrollParticipant(
            'cjjim1cbx001h0768y5u783sv',
            'cjjim1cc7001r0768jiovtehu',
        )

        return 'Success'
    },

    async disenrollFromActivity({}, { activityId }, context: Context, info) {
        const participant = await context.participant.getByEmail(
            context.currentUser!.email,
        )

        await context.inscription.create(activityId, participant!.id)
    },
}

const NoAvailableVacanciesError = 'NoAvailableVacancies'
