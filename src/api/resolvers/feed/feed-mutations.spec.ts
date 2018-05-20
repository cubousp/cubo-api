import { IStoryRepository } from '../../../repositories/i-story-repository'
import { feedMutations } from './feed-mutations'

const MockStoryRepository = jest.fn<IStoryRepository>(() => ({
    save: jest.fn(),
}))

describe('feedMutations',  () => {

    let context

    beforeAll(() => {
        context = {
            storyRepository: new MockStoryRepository(),
        }
    })

    describe('postToFeed', () => {
        it('should call the stories repository with correct params', async () => {
            const payload = {
                input: {
                    message: 'My first story',
                },
            }
            await feedMutations.postToFeed(null, payload, context)
            expect(context.storyRepository.save).toBeCalledWith(payload.input)
        })
    })

})
