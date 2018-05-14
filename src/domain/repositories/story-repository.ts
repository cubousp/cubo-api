import { Story } from '../entities/story'

export interface StoryRepository {

    getLatestStories(options?: { limit: number, last: string}): Promise<{
        stories: Story[],
        hasMore: boolean,
        last?: string,
    }>

    save(storyInput): Promise<Story>
}