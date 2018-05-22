import { IContext } from '../../../context'
import { RepositoryError } from '../../../repositories/error-code'
import { TransparentError } from '../error'

export const feedMutations = {

    async postToFeed(_, { input }, context: IContext) {
        return context.storyRepository.save(input)
    },

    async updateStory(_, { id, input }, context: IContext) {
        try {
            return context.storyRepository.update(id, input)
        } catch (err) {
            if (err.message === RepositoryError.ItemNotFound) {
                throw new TransparentError('Story not found')
            }
            throw err
        }
    },
}
