import { FeedService } from '../services/feed-service'
import { GetFeed } from './get-feed'
import { Story } from '../entities/story'

const MockFeedService = jest.fn<FeedService>( () => ({
    getFeed: jest.fn()
}))

describe('GetFeed', () => {

    let feedService
    let getFeed: GetFeed


    beforeAll(() => {
        feedService = new MockFeedService()
        getFeed = new GetFeed(feedService)
    })

    it('should call the feed service with correct params', async() => {
        const options = { limit: 10, last: 'fake-id' }
        await getFeed.execute(options)
        expect(feedService.getFeed).toBeCalledWith(options)
    })

    it('should get the feed', async() => {
        const feed = [new Story({
            id: '3',
            message: 'Story 3'
        }), new Story({
            id: '2',
            message: 'Story 2'
        }), new Story({
            id: '1',
            message: 'Story 1'
        })]
        feedService.getFeed.mockImplementation(() => feed)
        expect(await getFeed.execute()).toEqual(feed)
    })
    
})