import gql from 'graphql-tag'
import { TransparentError } from '../api/utils/error'
import { client } from './client'
import { RepositoryError } from './error-code'

export class Inscription {
    public async create(activityId: string, participantId: string, info?) {
        if (await this.inscriptionExists(activityId, participantId)) {
            throw new TransparentError(
                'Participant already enrolled to activity',
                RepositoryError.ItemAlreadyExists,
            )
        }
        return client.mutation.createInscription({
                data: {
                    activity: { connect: { id: activityId } },
                    participant: { connect: { id: participantId } },
                },
            }, info,
        )
    }

    public async desinrollParticipant(
        activityId: string,
        participantId: string) {
        try {
            const inscription = await client.query.inscriptionsConnection({
                where: {
                    activity: { id: activityId },
                    participant: { id: participantId },
                },
            }, gql`
                edges {
                    node {
                        id
                    }
                }
            `)

            await client.mutation.deleteInscription({
                where: { id: inscription.edges[0].node.id },
            })
        } catch (err) {
            throw new TransparentError(
                'Inscription does not exist', RepositoryError.ItemNotFound,
            )
        }
    }

    public async delete(id: string) {
        try {
            await client.mutation.deleteInscription({ where: { id }})
        } catch (err) {
            throw new TransparentError(
                'Inscription does not exist', RepositoryError.ItemNotFound,
            )
        }
    }

    private async inscriptionExists(activityId: string, participantId: string) {
        const { aggregate: { count } } =
        await client.query.inscriptionsConnection({
            where: {
                activity: { id: activityId },
                participant: { id: participantId },
            },
        }, gql`
            {
                aggregate { count }
            }
        `)
        return count !== 0
    }

}
