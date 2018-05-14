import { StoryRepository } from '../../domain/repositories/story-repository'
import { Story } from '../../domain/entities/story'
import { BaseDbRepository } from './base-db-repository'

export class DbStoryRepository extends BaseDbRepository implements StoryRepository {

    async save(storyInput): Promise<Story> {
        const story = await this.client.mutation.createStory({
            data: {
                message: storyInput.message
            }
        })
        return new Story(story)
    }

}