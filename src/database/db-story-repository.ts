import gql from 'graphql-tag'
import { IPaginationOptions } from '../repositories/pagination'
import { IPaginatedStories, IStoryRepository, Story } from '../repositories/i-story-repository'
import { client } from './client'

export class DbStoryRepository implements IStoryRepository {

    public async save(storyInput): Promise<Story> {
        return client.mutation.createStory({
            data: {
                message: storyInput.message,
            },
        })
    }

    public async getLatestStories(options?: IPaginationOptions): Promise<IPaginatedStories> {
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

    public async update(id: string, input: Partial<Story>): Promise<Story> {
        return undefined
    }

}
