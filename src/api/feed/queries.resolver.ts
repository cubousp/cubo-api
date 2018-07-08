import { Context } from '../../context'

export const Query = {

    async feed(_, { limit, last }, context: Context) {
        return context.story.getLatestStories({ limit, last })
    },

}
