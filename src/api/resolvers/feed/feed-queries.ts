import { Context } from '../../../context'

export const feedQueries = {

    async feed(_, { limit, last }, context: Context) {
        return context.story.getLatestStories({ limit, last })
    },

}
