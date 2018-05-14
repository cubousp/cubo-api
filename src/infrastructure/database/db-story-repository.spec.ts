import { DbStoryRepository } from './db-story-repository'
import { cleanUpDatabase } from '../../../test-utils/database'
import { client } from './client'

describe('DbStoryRepository', () => {

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

})