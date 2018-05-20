import gql from 'graphql-tag'
import { IPaginationOptions } from '../repositories/i-pagination-options'
import { IStoryRepository } from '../repositories/i-story-repository'
import { client } from './client'

export class DbStoryRepository implements IStoryRepository {

    public async save(storyInput) {
        return client.mutation.createStory({
            data: {
                message: storyInput.message,
            },
        })
    }

    public async getLatestStories(options?: IPaginationOptions) {
        const queryResult = await client.query.storiesConnection({
            after: options && options.last,
            first: options && options.limit,
            orderBy: 'createdAt_DESC',
        }, gql`
            {
                pageInfo {
                    hasNextPage
                    endCursor
                }
                edges {
                    node {
                        id
                        message
                        createdAt
                    }
                }
            }
        `,
        )
        return {
            hasMore: queryResult.pageInfo.hasNextPage,
            last: queryResult.pageInfo.endCursor,
            stories: queryResult.edges.map((edge) => edge.node),
        }
    }

}
