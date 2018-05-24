import { IContext } from '../../../context'
import { RepositoryError } from '../../../repositories/error-code'
import { TransparentError } from '../error'

export const feedMutations = {

    async postToFeed(_, { input }, context: IContext) {
        return context.storyRepository.save(input)
    },

    async updateStory(_, { id, input }, context: IContext) {
        try {
            const updatedStory = await context.storyRepository.update(id, input)
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
}
