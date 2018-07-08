import { RepositoryError} from '../../database/error-code'
import { IStoryRepository } from '../../../repositories/i-story-repository'
import { TransparentError } from '../utils/error'
import { mutations } from './feed-mutations'

const MockStoryRepository = jest.fn<IStoryRepository>(() => ({
    delete: jest.fn(),
    save: jest.fn(),
    update: jest.fn(),
}))

describe('feedMutations',  () => {

    let context

    beforeAll(() => {
        context = {
            storyRepository: new MockStoryRepository(),
        }
    })

    describe('postToFeed', () => {
        it('should call the stories repository', async () => {
            const payload = {
                input: {
                    message: 'My first story',
                },
            }
            await mutations.postToFeed(null, payload, context)
            expect(context.storyRepository.save).toBeCalledWith(payload.input)
        })
    })

    describe('updateStory', () => {
        it('should call the stories repository', async () => {
            const payload = {
                id: 'fake-id',
                input: {
                    message: 'Some message',
                },
            }
            await mutations.updateStory(null, payload, context)
            expect(context.storyRepository.update)
                .toBeCalledWith(payload.id, payload.input)
        })

        it('should throw error when story does not exist', async () => {
            const payload = {
                id: 'fake-id',
                input: {
                    message: 'Some message',
                },
            }
            context.storyRepository.update.mockImplementation(
                () => { throw new Error(RepositoryError.ItemNotFound) },
            )
            await expect(mutations.updateStory(null, payload, context))
                .rejects
                .toThrow(TransparentError)
        })
    })

    describe('deleteStory', () => {
        it('should delete a story', async () => {
            const payload = {
                id: 'some-id',
            }
            await mutations.deleteStory(null, payload, context)
            expect(context.storyRepository.delete).toBeCalledWith(payload.id)
        })

        it('should throw error when story does not exist', async () => {
            const payload = {
                id: 'fake-id',
            }
            context.storyRepository.delete.mockImplementation(
                () => { throw new Error(RepositoryError.ItemNotFound) },
            )
            await expect(mutations.deleteStory(null, payload, context))
                .rejects
                .toThrow(TransparentError)
        })
    })
})
