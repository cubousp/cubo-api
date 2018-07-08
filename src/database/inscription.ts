import gql from 'graphql-tag'
import { TransparentError } from '../api/utils/error'
import { client } from './client'
import { RepositoryError } from './error-code'

export class Inscription {
    public async createInscription(
        activityId: string, participantId: string, info,
    ) {
        if (await this.inscriptionExists(activityId, participantId)) {
            throw new TransparentError(
                'This participant has already enrolled to this activity',
                RepositoryError.InscriptionAlreadyExists,
            )
        }
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

    public async inscriptionExists(
        activityId: string, participantId: string,
    ): Promise<boolean> {
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

    public async delete(inscriptionId) {
        return client.mutation.deleteInscription({
            where: { id: inscriptionId },
        })
    }
}
