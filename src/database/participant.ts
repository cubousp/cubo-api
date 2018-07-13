import gql from 'graphql-tag'
import { TransparentError } from '../api/utils/error'
import { client } from './client'
import { RepositoryError } from './error-code'
import { ParticipantUpdateInput } from './generated/prisma'

export class Participant {
    public async participants(limit = 100, last) {
        const queryResult = await client.query.participantsConnection({
            after: last,
            first: limit,
            orderBy: 'name_ASC',
        }, gql`
            {
                pageInfo {
                    hasNextPage
                    endCursor
                }
                edges {
                    node {
                        id
                        name
                    }
                }
            }
        `)

        return {
            hasMore: queryResult.pageInfo.hasNextPage,
            last: queryResult.pageInfo.endCursor,
            participants: queryResult.edges.map((edge) => edge.node),
        }
    }

    public async update(id, input , info?) {
        return client.mutation.updateParticipant(
            {
                data: { ...input },
                where: { id },
            }, info)
    }

    public async save(input, info?) {
        return client.mutation.createParticipant({ data: input }, info)
    }

    public async get(id, info?) {
        return client.query.participant({ where: { id }}, info)
    }

    public async getByEmail(email: string, info?) {
        try {
            const participant = await client.query.participant(
                { where: { email }},
                info,
            )
            return participant
        } catch (err) {
            throw new TransparentError(
                'Participant does not exist', RepositoryError.ItemNotFound,
            )
        }
    }
}
