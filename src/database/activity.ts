import { client } from './client'

export class Activity {
    public getAll() {
        return client.query.activities({})
    }

    public save(activityInput, info) {
        return client.mutation.createActivity({
            data: {
                ...activityInput,
                speaker: {
                    create: activityInput.speaker,
                },
            },
        }, info)
    }

    public update(id, activity, info) {
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

    public get(id, info) {
        return client.query.activity({ where: { id }}, info)
    }
}
