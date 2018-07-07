import { Context } from '../../../context'
import { RepositoryError } from '../../../database/error-code'
import { TransparentError } from '../error'

export const feedMutations = {

    async postToFeed(_, { input }, context: Context) {
        return context.story.save(input)
    },

    async updateStory(_, { id, input }, context: Context) {
        try {
            const updatedStory = await context.story.update(id, input)
            return updatedStory
        } catch (err) {
            if (err.message === RepositoryError.ItemNotFound) {
                throw new TransparentError(
                    'Story not found',
                    'StoryNotFound',
                )
            }
            throw err
        }
    },

    async deleteStory(_, { id }, context: Context) {
        try {
            await context.story.delete(id)
            return 'Story deleted with success'
        } catch (err) {
            if (err.message === RepositoryError.ItemNotFound) {
                throw new TransparentError(
                    'Story not found',
                    'StoryNotFound',
                )
            }
            throw err
        }
    },
}
