import gql from 'graphql-tag'
import { client } from './client'

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

    public async save(input, info) {
        return client.mutation.createParticipant({ data: input }, info)
    }

    public async get(id, info) {
        return client.query.participant({ where: { id }}, info)
    }
}
