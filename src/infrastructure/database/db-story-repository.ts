import { StoryRepository } from '../../domain/repositories/story-repository'
import { Story } from '../../domain/entities/story'
import { BaseDbRepository } from './base-db-repository'
import gql from 'graphql-tag'

export class DbStoryRepository extends BaseDbRepository implements StoryRepository {

    async save(storyInput): Promise<Story> {
        const story = await this.client.mutation.createStory({
            data: {
                message: storyInput.message
            }
        })
        return new Story(story)
    }

    async getLatestStories(options?: { limit: number; last: string }): Promise<{
        stories: Story[],
        hasMore: boolean,
        last?: string
    }> {
        const result = await this.client.query.storiesConnection({
            orderBy: 'createdAt_DESC',
            first: options && options.limit,
            after: options && options.last
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
                    }
                }
            }    
        `
        )
        return {
            hasMore: result.pageInfo.hasNextPage,
            stories: result.edges.map(edge => new Story(edge.node)),
            last:result.pageInfo.endCursor
        }
    }

}