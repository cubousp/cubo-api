import gql from 'graphql-tag'
import { client } from './client'
import { RepositoryError } from './error-code'
import { IPaginationOptions } from './pagination'

export class Story {

    private STORY_NOT_FOUND = new RegExp(
        /No Node for the model Story with value (.*?) for id found./,
    )

    public async save(storyInput) {
        return client.mutation.createStory({
            data: {
                message: storyInput.message,
            },
        })
    }

    public async getLatestStories(
        options?: IPaginationOptions,
    ) {
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

    public async update(id, input) {
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

    public async delete(id): Promise<void> {
        try {
            await client.mutation.deleteStory({
                where: {
                    id,
                },
            })
        } catch (err) {
            if (err.message.match(this.STORY_NOT_FOUND)) {
                throw new Error(RepositoryError.ItemNotFound)
            }
        }
    }
}
