import { Context } from '../../context'
import { TransparentError } from '../utils/error'

export const Mutation = {
    async createParticipant({}, { input }, context: Context, info) {
        // TODO: use authService to generate a real authId
        // TODO: send a welcome/reset password email to new participant
        const authId = input.email
        input.authId = authId
        return context.participant.save(input, info)
    },

    async enrollToActivity({}, { activityId }, context: Context) {
        const activity = await context.activity.get(activityId)
        if (await context.activity.getAvailableVacanciesFor(activity) === 0) {
            throw new TransparentError(
                'No available vacancies for this activity',
                NoAvailableVacanciesError,
            )
        }
        await context.inscription.create(activityId, context.currentUser!.id)
},
    async disenrollFromActivity({}, { inscriptionId }, context: Context) {
        await context.inscription.delete(inscriptionId)
        return 'Success'
    },

    async signUp({}, { input }, context: Context, info) {
        return await context.participant.save(input, info)
    },

    async updateProfile({}, { updateParticipant }, context: Context, info) {
        return context.participant.update(
            context.currentUser!.id,
            updateParticipant,
            info,
        )
    },
}

const NoAvailableVacanciesError = 'NoAvailableVacancies'
