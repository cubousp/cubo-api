import { ID } from './id'
import { IPagination, IPaginationOptions } from './pagination'

export interface IStoryRepository {
    getLatestStories(options?: IPaginationOptions): Promise<IPaginatedStories>
    save(storyInput): Promise<Story>
    update(id: ID, input: Partial<Story>): Promise<Story>
    delete(id: ID): Promise<void>
}

export interface IPaginatedStories extends IPagination {
    stories: Story[]
}

export type Story = any
