import { IStoryRepository } from '../../../repositories/i-story-repository'
import { feedQueries } from './feed-queries'

const MockStoryRepository = jest.fn<IStoryRepository>(() => ({
    getLatestStories: jest.fn(),
}))

describe('feedQueries',  () => {

    let context

    beforeAll(() => {
        context = {
            storyRepository: new MockStoryRepository(),
        }
    })

    describe('feed', () => {
        it('should call the stories repository with correct params', async () => {
            const input = {
                last: 'fake-id',
                limit: 10,
            }
            await feedQueries.feed(null, input, context)
            expect(context.storyRepository.getLatestStories).toBeCalledWith(input)
        })
    })

})