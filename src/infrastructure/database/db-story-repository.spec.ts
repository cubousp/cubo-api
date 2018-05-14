import { DbStoryRepository } from './db-story-repository'
import { cleanUpDatabase } from '../../../test-utils/database'
import { client } from './client'
import { Story } from '../../domain/entities/story'

describe('DbStoryRepository', () => {

    const createStory = (message: string) => client.mutation.createStory({
        data: {
            message
        }
    })

    let storyRepository: DbStoryRepository

    beforeEach(async() => {
        await cleanUpDatabase()
        storyRepository = new DbStoryRepository()
    })

    it('should save a story and return it', async() => {
        const input = {
            message: 'Test'
        }
        const output = await storyRepository.save(input)

        const createdStory = await client.query.story({ where: { id: output.id }})

        expect(createdStory!.message).toEqual('Test')
        expect(output).toEqual(createdStory)
    })

    it('should get the latest stories', async() => {
        const firstStory = await createStory('Story 1')
        const secondStory = await createStory('Story 2')
        const thirdStory = await createStory('Story 3')

        const expected = [thirdStory, secondStory, firstStory]

        expect(await storyRepository.getLatestStories()).toEqual(expected)
    })

    it('should paginate the latest stories', async() => {
        const firstStory = await createStory('Story 1')
        const secondStory = await createStory('Story 2')
        const thirdStory = await createStory('Story 3')
        const fourthStory = await createStory('Story 4')

        let options: any = { limit: 2 }

        let expected: any = {
            stories: [fourthStory, thirdStory],
            hasMore: true,
            last: thirdStory.id
        }

        expect(await storyRepository.getLatestStories(options)).toEqual(expected)

        options = { limit: 2, last: thirdStory.id }

        expected = {
            stories: [secondStory, firstStory],
            hasMore: false,
            last: undefined
        }

        expect(await storyRepository.getLatestStories(options)).toEqual(expected)
    })

})