import { StoryRepository } from '../repositories/story-repository'
import { FeedService } from './feed-service'
import { Story } from '../entities/story'

const MockStoryRepository = jest.fn<StoryRepository>( () => ({
    getLatestStories: jest.fn()
}))

describe('FeedService', () => {

    let storyRepository
    let feedService: FeedService

    beforeEach(() => {
        storyRepository = new MockStoryRepository()
        feedService = new FeedService(storyRepository)
    })

    it(`should call the story repository with correct parameters`, async () => {
        const options = {
            limit: 10,
            last: 'fake-id'
        }
        await feedService.getFeed(options)
        expect(storyRepository.getLatestStories).toBeCalledWith(options)
    })

    it('should return the feed', async() => {
        const mockStories = 'mock-stories'
        storyRepository.getLatestStories.mockImplementation(() => mockStories)
        expect(await feedService.getFeed()).toEqual(mockStories)
    })

})