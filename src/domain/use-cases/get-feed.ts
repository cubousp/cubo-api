import { FeedService } from '../services/feed-service'

export class GetFeed {

    constructor(private feedService: FeedService) { }


    async execute(options?) {
        return this.feedService.getFeed(options)
    }
}