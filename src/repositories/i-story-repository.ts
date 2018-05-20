import { IPaginationOptions } from './i-pagination-options'

export interface IStoryRepository {

    getLatestStories(options?: IPaginationOptions): Promise<{
        stories: Story[],
        hasMore: boolean,
        last?: string,
    }>

    save(storyInput): Promise<Story>
}

type Story = any
