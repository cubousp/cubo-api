import { IContext } from '../../../context'

export const feedQueries = {

    async feed(_, { limit, last }, context: IContext) {
        return context.storyRepository.getLatestStories({ limit, last })
    },

}
