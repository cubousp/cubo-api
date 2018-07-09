import gql from 'graphql-tag'
import { client } from './client'

export class Activity {
    public getAll(info?) {
        return client.query.activities({ orderBy: 'startsAt_ASC' }, info)
    }

    public save(activityInput, info?) {
        return client.mutation.createActivity({
            data: {
                ...activityInput,
                speaker: {
                    create: activityInput.speaker,
                },
            },
        }, info)
    }

    public update(id, activity, info?) {
        return client.mutation.updateActivity({
            data: activity,
            where: {
                id,
            },
        }, info)
    }

    public delete(id) {
        return client.mutation.deleteActivity({
            where: {
                id,
            },
        })
    }

    public async get(id, info?) {
        return await client.query.activity({ where: { id }}, info)
    }

    public async getAvailableVacanciesFor(activity) {
        const { id, totalVacancies = 0 } = activity
        const { aggregate: { count: enrolledCount } } =
        await client.query.inscriptionsConnection({
            where: { activity: { id } },
        }, gql`{ aggregate { count } }`)
        return totalVacancies - enrolledCount
    }
}
