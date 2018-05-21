import { cleanUpTestDatabase } from '../../test-utils/database'
import { commonQueries } from '../../test-utils/database'
import { IPaginationOptions } from '../repositories/i-pagination-options'
import { client } from './client'
import { DbStoryRepository } from './db-story-repository'

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

})
