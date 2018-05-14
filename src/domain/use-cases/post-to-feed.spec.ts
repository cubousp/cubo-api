import { PostToFeed } from './post-to-feed'
import { StoryRepository } from '../repositories/story-repository'
import mock = jest.mock

const MockStoryRepository = jest.fn<StoryRepository>(() => ({
    save: jest.fn(),
}))

describe('PostToFeed', () => {

    let postToFeed: PostToFeed
    let storyRepository

    beforeAll(() => {
        storyRepository = new MockStoryRepository()
        postToFeed = new PostToFeed(storyRepository)
    })

    it('should save the story', async() => {
        const input = { message: 'hi' }
        await postToFeed.execute(input)
        expect(storyRepository.save).toBeCalledWith(input)
    })

    it('should return the saved story', async() => {
        const input = { message: 'hi' }
        const mockedStory = { id: '1', ...input }
        storyRepository.save.mockImplementation((input) => mockedStory)
        expect(await postToFeed.execute(input)).toMatchObject({ id: '1', ...input})
    })
    
})