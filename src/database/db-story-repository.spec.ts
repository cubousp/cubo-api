import { cleanUpTestDatabase } from '../../test-utils/database'
import { commonQueries } from '../../test-utils/database'
import { IPaginationOptions } from '../repositories/pagination'
import { client } from './client'
import { DbStoryRepository } from './db-story-repository'
import { RepositoryError } from '../repositories/error-code'

describe('DbStoryRepository', () => {

    const createStory = commonQueries.createStory
    const storyRepository = new DbStoryRepository()

    beforeEach(async () => {
        await cleanUpTestDatabase()
    })

    it('should save a story and return it', async () => {
        const input = {
            message: 'Test',
        }
        const output = await storyRepository.save(input)
        const createdStory = await client.query.story({ where: { id: output.id }})

        expect(createdStory!.message).toEqual('Test')
        expect(output).toEqual(createdStory)
    })

    it('should get the latest stories paginated', async () => {
        const firstStory = await createStory('Story 1')
        const secondStory = await createStory('Story 2')
        const thirdStory = await createStory('Story 3')
        const fourthStory = await createStory('Story 4')

        let options: IPaginationOptions = { limit: 2 }

        let expected = {
            hasMore: true,
            last: thirdStory.id,
            stories: [fourthStory, thirdStory],
        }

        expect(await storyRepository.getLatestStories(options)).toEqual(expected)

        options = { limit: 2, last: thirdStory.id }

        expected = {
            hasMore: false,
            last: firstStory.id,
            stories: [secondStory, firstStory],
        }

        expect(await storyRepository.getLatestStories(options)).toEqual(expected)
    })

    it('should update a story', async() => {
        const story = await createStory('My story')
        expect(await storyRepository.update(story.id, {
            message: 'New message',
        })).toEqual({
            createdAt: expect.any(String),
            id: expect.any(String),
            message: 'New message',
        })
    })

    it('should throw error when story not found', async() => {
        await expect(storyRepository.update('non-existent-id', {
            message: 'Message',
        })).rejects.toThrow(RepositoryError.ItemNotFound)
    })
})
