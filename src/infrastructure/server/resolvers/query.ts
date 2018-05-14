import { Context } from '../context'
import { FeedService } from '../../../domain/services/feed-service'
import { GetFeed } from '../../../domain/use-cases/get-feed'

export const query = {

    async feed(_, { limit, last }, context: Context) {
        const feedService = new FeedService(context.storyRepository)
        const getFeed = new GetFeed(feedService)
        return getFeed.execute({limit, last})
    }

}