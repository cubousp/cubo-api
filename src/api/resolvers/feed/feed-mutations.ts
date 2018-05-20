import { Context } from '../../../context'

export const feedMutations = {

    async postToFeed(_, { input }, context: Context) {
        return context.storyRepository.save(input)
    },

}
