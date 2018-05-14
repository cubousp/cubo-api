import { StoryRepository } from '../repositories/story-repository'

export class FeedService {

    constructor(private storyRepository: StoryRepository) { }


    async getFeed(options?) {
        return this.storyRepository.getLatestStories(options)
    }
}