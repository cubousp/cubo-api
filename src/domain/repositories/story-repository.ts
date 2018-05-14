import { Story } from '../entities/story'

export interface StoryRepository {
    save(storyInput): Promise<Story>
}