import { Context } from '../../context'
import { TransparentError } from '../utils/error'

export const Mutation = {
    async enrollParticipant(
        _, { activityId, participantId }, context: Context, info,
    ) {
        const activity = await context.activity.get(activityId, undefined)
        if (await context.activity.getAvailableVacanciesFor(activity) === 0) {
            throw new TransparentError(
                'No available vacancies for this activity',
                NoAvailableVacanciesError,
            )
        }
        return context.inscription.create(activityId, participantId, info)
    },

    async disenrollParticipant({}, { inscriptionId }, context: Context) {
        await context.inscription.delete(inscriptionId)
        return 'Success'
    },
}

const NoAvailableVacanciesError = 'NoAvailableVacancies'
