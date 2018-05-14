import { PostToFeed } from '../../../domain/use-cases/post-to-feed'
import { Context } from '../context'

export const mutation = {

    async postToFeed(_, { input }, context: Context) {
        const postToFeed = new PostToFeed(context.storyRepository)
        return postToFeed.execute(input)
    }

}