import gql from 'graphql-tag'
import { RepositoryError } from '../repositories/error-code'
import {
    IPaginatedStories, IStoryRepository, Story,
} from '../repositories/i-story-repository'
import { ID } from '../repositories/id'
import { IPaginationOptions } from '../repositories/pagination'
import { client } from './client'

export class DbStoryRepository implements IStoryRepository {

    private STORY_NOT_FOUND = new RegExp(
        /No Node for the model Story with value (.*?) for id found./,
    )

    public async save(storyInput): Promise<Story> {
        return client.mutation.createStory({
            data: {
                message: storyInput.message,
            },
        })
    }

    public async getLatestStories(
        options?: IPaginationOptions,
    ): Promise<IPaginatedStories> {
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

    public async update(id: ID, input: Partial<Story>): Promise<Story> {
        try {
            const updateResult = await client.mutation.updateStory({
                data: input,
                where: {
                    id,
                },
            }, gql`
                {
                    id
                    message
                    createdAt
                }
            `)
            return updateResult
        } catch (err) {
            if (err.message.match(this.STORY_NOT_FOUND)) {
                throw new Error(RepositoryError.ItemNotFound)
            }
            throw err
        }
    }
}
